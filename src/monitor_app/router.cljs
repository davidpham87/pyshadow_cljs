(ns monitor-app.router
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [re-frame.core :refer [dispatch]]))

(def routes
  ["/" {""         :home
        "login"    :login
        "logout"   :logout}])

;; By using bidi/match-route we convert URL into a data structure and check if 
;; a route exists in our routes.
(defn- parse-url
  [url]
  (bidi/match-route routes url))

;; -- dispatch-route ----------------------------------------------------------
;; When we find a match, with parse-url, we will use the output to
;; dispatch route and redirect a user
(defn- dispatch-route
  [matched-route]
  (dispatch [:set-active-page {:page (:handler matched-route)}]))

;; -- Router Start ------------------------------------------------------------
(defn start!
  []
  ;; pushy is here to take care of nice looking urls. Normally we would have to
  ;; deal with #. By using pushy we can have '/about' instead of '/#/about'.
  ;; pushy takes three arguments:
  ;; dispatch-fn - which dispatches when a match is found
  ;; match-fn - which cheks to see if a route exist
  ;; identity-fn (optional) - extract the route from value returned by match-fn
  (pushy/start! (pushy/pushy dispatch-route parse-url)))


;; -- url-for -----------------------------------------------------------------
;; To dispatch routes in our UI (view) we will use url-for and then pass a
;; keyword to which route we want to direct the user.
;; usage: (url-for :home)
(def url-for (partial bidi/path-for routes))

;; -- history -----------------------------------------------------------------
;; we need to hook up history to our set-token so that we can go back
(def history (pushy/pushy dispatch-route (partial bidi/match-route routes)))

;; -- set-token! --------------------------------------------------------------
;; To change route after some actions we will need to set url and for that we
;; will use set-token! that needs history and the token
(defn set-token!
  [token]
  (pushy/set-token! history token))
