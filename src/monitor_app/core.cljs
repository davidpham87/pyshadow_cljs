(ns monitor-app.core
  (:require [reagent.core :as reagent]
            [re-frame.core :refer [dispatch dispatch-sync clear-subscription-cache!]]
            [monitor-app.router :as router]
            [monitor-app.events] ;; Only here for compiler to load them
            [monitor-app.subs]
            [monitor-app.views]))


(println "This text is printed from src/pycljs/core.cljs. Go ahead and edit it and see reloading?")

(defn ^:export main
  []

  ;; Routre config can be fount within `./router.cljs`. Here we are just hooking
  ;; up the router on start
  (router/start!)

  ;; Put an initial value into app-db.
  ;; The event handler for `:initialise-db` can be found in `events.cljs`
  ;; Using the sync version of dispatch means that value is in
  ;; place before we go onto the next step.
  (dispatch-sync [:initialise-db])

  ;; Render the UI into the HTML's <div id="app" /> element
  ;; The view function `monitor-app.views/conduit-app` is the
  ;; root view for the entire UI.
  (reagent/render [monitor-app.views/app]
                  (.getElementById js/document "app")))

