import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboard";
import authReducer from "./slices/auth";
import userReducer from "./slices/user";
import payReducer from "./slices/payment";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  auth: authReducer,
  user: userReducer,
  pay: payReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
