(ns monitor-app.views
  (:require [reagent.core :as reagent]
            [monitor-app.router :refer [url-for set-token!]]
            [re-frame.core :refer [subscribe dispatch]]
            [clojure.string :as clj-str]
            [clojure.walk :refer [keywordize-keys]]
            ["d3" :as d3]
            [goog.object :as gobj]
            ["@material-ui/core" :as mui]
            ["@material-ui/core/colors" :as mui-colors]
            ["@material-ui/core/styles" :refer [createMuiTheme withStyles]]
            ["@material-ui/icons/Face" :default ic-face]))

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
  (createMuiTheme #js {:palette #js {:main (gobj/get (.-red mui-colors) 100)}}))

(defn custom-styles [theme]
  (let [spacing-unit (.. theme -spacing -unit)
        button #js {:margin spacing-unit}
        text-field #js {:width 200 :margin-left spacing-unit
                    :margin-right spacing-unit}]
    #js {:button button :text-field text-field}))

(def with-custom-styles (withStyles custom-styles))


(defn add-load-func [f]
  (let [old-onload (.-onload js/window)]
    (set! (.-onload js/window)
          (if (nil? old-onload)
            f
            (fn [_] (old-onload) (f))))))


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


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (add-load-func
   (fn []
     (make-request
      "GET"
      "/newtext"
      true
      (fn [response]
        (.log js/console (response "text"))
        (swap! app-state assoc-in [:text] (response "text")))))))


(defn test-request
  ([] (test-request "/newtext" app-state :text))
  ([resource-path data-container field]
   (.log js/console resource-path)
   (.log js/console (str "test " resource-path))
   (.log js/console (:text @app-state))
   (make-request
    "GET"
    resource-path
    true
    (fn [response]
      (swap! data-container assoc-in [field] (response "text"))))))

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



(defonce ts-id-atom (reagent/atom "roche"))

#_(defn show-json [ts-id]
  (let [server-request (reagent/atom {:data {}})]
    (fn [ts-id]
      [:div
       [:button {:on-click #(test-request (str "ts/" ts-id) server-request-global :data)} "New Data"]
       [:div [table (:data @server-request-global) [:date :price] :date]]
       #_(str ((:data @server-request) (rand-int 100)))])))

(defn show-json [ts-id]
  (let [ts-data (subscribe [:ts-datum ts-id :price])]
    (fn [ts-id]
      [:div
       [:button {:on-click #(dispatch [:get-ts-data ts-id])} "New Data"]
       [table @ts-data]
       #_(str ((:data @server-request) (rand-int 100)))])))


(defn text-world []
  [:<>
   [:p "Reload, test"]
   [show-json @ts-id-atom]])

(defn body []
  [:<>
   [:> mui/CssBaseline]
   [:> mui/MuiThemeProvider
    {:theme custom-theme}
    [:h1 "Flask with clojurescript and figwheel demo"]
    [:p "The heading below should change to say hi from flask"]
    [text-world]
    [:h2 (:text @app-state)]
    [:button {:on-click #(test-request)} "Reload Text"]
    [:> mui/Grid
     {:container true :direction "row" :justify "center"}
     [:> mui/Grid {:item true :xs 6}
      [:> mui/Chip {:icon (reagent/create-element ic-face) :label "Icon"}]]]]])

(defn app []
  [:div
   [:> (with-custom-styles (reagent/reactify-component body))]])
