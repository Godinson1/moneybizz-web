import { setSidebarOpen } from "./slices/dashboard";
import store from "./store";
import {
  setIsLogin,
  setIsSignUp,
  setUserData,
  setIsLoggedOut,
} from "./slices/auth";
import {
  setPaymentLoading,
  getPayment,
  setPaymentError,
} from "./slices/payment";
import {
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  createNewPassword,
} from "./actions/auth";
import { getUserDetail } from "./actions/user";
import { payWithBank } from "./actions/payment";

export {
  store,
  setUserData,
  setIsLogin,
  setIsSignUp,
  setIsLoggedOut,
  logoutUser,
  loginUser,
  registerUser,
  resetPassword,
  setSidebarOpen,
  createNewPassword,
  getUserDetail,
  payWithBank,
  setPaymentLoading,
  getPayment,
  setPaymentError,
};
