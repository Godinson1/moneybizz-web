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
  setProfilePhotoLoading,
  setProfilePhoto,
  clearData,
} from "./slices/user";
import {
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  createNewPassword,
} from "./actions/auth";
import { getUserDetail, updateProfilePhoto } from "./actions/user";
import { clearMessage } from "./actions/dashboard";
import { payWithBank, sendOtp } from "./actions/payment";

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
  sendOtp,
  setProfilePhotoLoading,
  updateProfilePhoto,
  setProfilePhoto,
  clearData,
  clearMessage,
};
