(ns monitor-app.events
  (:require [monitor-app.db :refer [default-db]]
            [re-frame.core :refer [reg-event-db reg-event-fx
                                   reg-fx inject-cofx after path debug]]
            [monitor-app.router :as router]
            [day8.re-frame.http-fx]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [ajax.core :refer [json-request-format json-response-format]]
            [clojure.string :as clj-str]
            [cljs-time.coerce :refer [to-long]]))



(def api-url
  "http://localhost:5000")

(defn endpoint [& params]
  "Concat any params to api-url separated by /"
  (clj-str/join "/" (concat [api-url] params)))

(reg-event-fx   ;; usage: (dispatch [:initialise-db])
 :initialise-db ;; sets up initial application state
 (fn-traced [_ _] {:db {:text "Hello"}}))

(reg-event-fx
 :get-ts-data
 (fn-traced
  [{:keys [db]} [_ ts-id params]]
  {:http-xhrio {:method :get
                :uri (endpoint "ts" ts-id)
                :params params
                :response-format (json-response-format {:keywords? true})
                :on-success [:get-ts-data-sucess ts-id]
                :on-failure [:api-request-error :get-ts-data]}
   :db (assoc-in db [:loading :ts-data] true)}))

(reg-event-db
 :get-ts-data-sucess
 (fn
  [db [_ ts-id result]]
  (-> db
      (assoc-in [:loading :ts-data] false)
      (assoc-in [:ts-data (keyword ts-id)] result))))

(reg-event-fx                                                                ;; usage: (dispatch [:set-active-page {:page :home})
 :set-active-page                                                            ;; triggered when the user clicks on a link that redirects to a another page
 (fn-traced
  [{:keys [db]} [_ {:keys [page]}]] ;; destructure 2nd parameter to obtain keys
  (let [set-page (assoc db :active-page page)]
    (case page
      ;; -- URL @ "/" --------------------------------------------------------
      :home {:db set-page}

      ;; -- URL @ "/login" | "/register" | "/settings" -----------------------
      :login {:db set-page}))))


;; -- Request Handlers -----------------------------------------------------------
;;

(reg-event-db
 :complete-request                ;; when we complete a request we need to clean up
 (fn-traced [db [_ request-type]] ;; few things so that our ui is nice and tidy
            (assoc-in db [:loading request-type] false)))

(reg-event-fx
 :api-request-error                                                                         ;; triggered when we get request-error from the server
 (fn-traced [{:keys [db]} [_ request-type response]]                                        ;; destructure to obtain request-type and response
            {:db (assoc-in db [:errors request-type] (get-in response [:response :errors])) ;; save in db so that we can display it to the user
             :dispatch [:complete-request request-type]}))
