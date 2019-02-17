(ns monitor-app.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(defn reverse-cmp ;; https://clojure.org/guides/comparators
  [a b]
  "Sort numbers in decreasing order, i.e.: calls compare with the arguments in the opposite order"
  (compare b a))

(reg-sub
 :active-page ;; usage: (subscribe [:showing])
 (fn [db _] ;; db is the (map) value stored in the app-db atom
   (:active-page db)))

(reg-sub
 :ts-data ;; usage: (subscribe [:ts-data ts-id])
 (fn [db query-v] ;; db is the (map) value stored in the app-db atom
   (.log js/console query-v)
   (:ts-data db)))

(reg-sub
 :ts-datum
 (fn [query-v _]
   (subscribe [:ts-data]))
 (fn [ts-data query-v _]
   (prn query-v)
   (let [[_ ts-id ts-attr] query-v]
     (ts-attr ((keyword ts-id) ts-data)))))

(reg-sub
 :hello-text
 (fn [db _] (get-in db [:server-response :text])))

