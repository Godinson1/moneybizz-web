import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboard";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
