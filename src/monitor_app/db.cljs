(ns monitor-app.db
  (:require [cljs.reader]
            [re-frame.core :refer [reg-cofx]]))

(def default-db {:active-page :home})  ;; what gets put into app-db by default.
