(ns monitor-app.views
  (:require [reagent.core :as reagent]
            [monitor-app.router :refer [url-for set-token!]]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [clojure.string :as clj-str]
            [clojure.walk :refer [keywordize-keys]]
            ["d3" :as d3]
            [goog.object :as gobj]
            ["@material-ui/core" :as mui]
            ["@material-ui/core/colors" :as mui-colors]
            ["@material-ui/core/styles" :refer [createMuiTheme withStyles]]
            ["@material-ui/icons/Face" :default ic-face]
            ["@material-ui/icons/Menu" :default ic-menu]))


;; -- Helpers -----------------------------------------------------------------
(defn format-date
  [date]
  (.toDateString (js/Date. date)))

(defn json-parse-js [string]
  ((.-parse js/JSON) string))

(defn json-parse [string]
  (-> string (json-parse-js) (js->clj)))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (reagent/atom {:text "Hello world! New"}))

(def custom-theme
  (createMuiTheme #js {:palette {:main (gobj/get (.-red mui-colors) 500)}}))

(defn custom-styles [theme]
  (let [spacing-unit (.. theme -spacing -unit)
        button #js {:margin spacing-unit}
        text-field #js {:width 200 :margin-left spacing-unit
                    :margin-right spacing-unit}]
    #js {:button button :text-field text-field}))

(def with-custom-styles (withStyles custom-styles))

(defn make-request [method url async handler]
  (let [req         (js/XMLHttpRequest.)
        req-ok      (fn [] (= (.-status req) 200))
        data-ready  (fn [] (= (.-readyState req) 4))
        req-done    (fn [] (and (req-ok) (data-ready)))
        parse-resp  (fn [] (-> req (.-responseText) (json-parse)))
        handle-resp (fn [_]
                      (when (req-done)
                      (let [response (parse-resp)]
                          (handler response))))]
    (set! (.-onreadystatechange req) handle-resp)
    (.open req method url async)
    (.send req)))



(defonce server-request-global (reagent/atom {:data {}}))

;; (defn table
;;   [m]
;;   [:table {:class "table table-condensed"}
;;    [:tbody
;;     (for [k (sorted (keys m))]
;;       ^{:key k} (vec `(:tr ~@(mapv #(vec [:td (% m)]) keys))))]])

(defn table
  [m]
  [:table {:class "table table-condensed"}
   [:tbody
    (for [k (sort (keys m))]
      ^{:key k} [:tr [:td (k m)]])]])


(defonce ts-id-atom (reagent/atom {:ts-id "roche"}))

(defn show-json [ratom]
  (let [ts-id (:ts-id @ratom)
        ts-data (subscribe [:ts-datum ts-id :price])]
    [:div
     [:button {:on-click #(dispatch [:get-ts-data ts-id])} "New Data"]
     [table @ts-data]
     #_(str ((:data @server-request) (rand-int 100)))]))


(defn text-world []
  [:<>
   [:p "Reload, test"]
   [show-json ts-id-atom]])


(defn body []
  [:<>
   [:> mui/CssBaseline]
   [:> mui/MuiThemeProvider
    {:theme custom-theme}
    [:> mui/AppBar {:position "static"} (str "Hello  " @(subscribe [:hello-text]))
     #_[:> mui/Toolbar
        [:> mui/IconButton {:color "inherit" :aria-label "Menu"}]]]
    [:h1 "Flask with clojurescript and figwheel demo"]
    [:p "The heading below should change to say hi from flask"]
    [text-world]
    [:h2 @(subscribe [:hello-text])]
    [:button {:on-click #(dispatch [:hello-world])} "Reload Text"]
    [:> mui/Grid
     {:container true :direction "row" :justify "center"}
     [:> mui/Grid {:item true :xs 6}
      [:> mui/Chip {:icon (reagent/create-element ic-face) :label "Icon"}]]]]])

(defn app []
  [:div
   [:> (with-custom-styles (reagent/reactify-component body))]])
