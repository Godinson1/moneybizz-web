import { setSidebarOpen } from "./slices/dashboard";
import store from "./store";
import {
  setIsLogin,
  setIsSignUp,
  setUserData,
  setIsLoggedOut,
} from "./slices/auth";
import {
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  createNewPassword,
} from "./actions/auth";

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
};
