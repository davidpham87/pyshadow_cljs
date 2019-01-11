(ns pycljs.core
  (:require [reagent.core :as reagent :refer [atom]]))


(defn json-parse-js [string]
  ((.-parse js/JSON) string))

(defn json-parse [string]
  (-> string (json-parse-js) (js->clj)))

(enable-console-print!)

(println "This text is printed from src/pycljs/core.cljs. Go ahead and edit it and see reloading?")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world! New"}))

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
  (.log js/console "Call")
  (add-load-func
   (fn []
     (make-request
      "GET"
      "/newtext"
      true
      (fn [response]
        ;; notes:
        ;;  (assoc-in obj keyseq value) associates value with a
        ;;                              series of keys in a nested map
        ;;  (swap! atom assoc-in keyseq value)  does the same operation
        ;;                                      on a map inside an atom
        (.log js/console (response "text"))
        (swap! app-state assoc-in [:text] (response "text"))))))
)

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
      ;; notes:
      ;;  (assoc-in obj keyseq value) associates value with a
      ;;                              series of keys in a nested map
      ;;  (swap! atom assoc-in keyseq value)  does the same operation
      ;;                                      on a map inside an atom
      (swap! data-container assoc-in [field] (response "text"))))))

(defn text-world []
  [:p "Reload, test, old-version"])

(defn show-json [ts-id]
  (let [server-request (atom {:data {}})]
    (fn [ts-id]
      [:div
       [:button {:on-click #(test-request (str "ts/" ts-id) server-request :data)} "New Data"]
       (:data @server-request)])))


(defn hello-world []
  [:div
   [:h1 "Flask with clojurescript and figwheel demo"]
   [:p "The heading below should change to say hi from flask"]
   [text-world]
   [:h2 (:text @app-state)]
   [:button {:on-click #(test-request)} "Reload Text"]
   [show-json "roche"]])

(defn ^:export init []
  (on-js-reload)
  (reagent/render-component [hello-world] (. js/document (getElementById "app"))))
