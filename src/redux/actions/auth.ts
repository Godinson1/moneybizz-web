import { setIsLogin, setIsLoggedOut } from "../slices/auth";
import axios from "axios";
import store from "../store";
import { getUserDetail } from "./user";

export interface loginData {
  data: string;
  password: string;
}

export const registerUser = (
  data: userData,
  setLoading: Function,
  showMessage: Function,
  history: any
) => async (dispatch: typeof store.dispatch) => {
  try {
    setLoading(true);
    const res = await axios.post(`/auth/register`, data);
    if (res) {
      setLoading(false);
      const { token, message } = res.data;
      showMessage(message);
      await setAuthorization(token);
      dispatch(getUserDetail());
      history.push("/home");
    }
  } catch (err) {
    console.log(err);
    if (err && err.response) {
      console.log(err.response.data);
      showMessage(err.response.data.message);
      setLoading(false);
    }
  }
};

export const loginUser = (
  data: loginData,
  setLoading: Function,
  showMessage: Function,
  history: any
) => async (dispatch: typeof store.dispatch) => {
  try {
    setLoading(true);
    const res = await axios.post(`/auth/login`, data);
    if (res) {
      console.log(res.data);
      setLoading(false);
      const { token, message } = res.data;
      showMessage(message);
      await setAuthorization(token);
      dispatch(getUserDetail());
      dispatch(setIsLogin({ status: true, token }));
      history.push("/home");
    }
  } catch (err) {
    console.log(err);
    if (err && err.response) {
      console.log(err.response.data);
      showMessage(err.response.data.message);
      setLoading(false);
    }
  }
};

export const resetPassword = (
  data: { email: string },
  setLoading: Function,
  showMessage: Function,
  navigation: any
) => async (dispatch: typeof store.dispatch) => {
  try {
    console.log(data);
    setLoading(true);
    const res = await axios.post(`/auth/password/reset`, data);
    if (res) {
      console.log(res);
      showMessage(res.data.message);
      setLoading(false);
      navigation.replace("ResetPassword");
    }
  } catch (err) {
    console.log(err.response.data);
    if (err && err.response && err.response.data) {
      showMessage(err.response.data.message);
      setLoading(false);
    }
  }
};

export const createNewPassword = (
  data: { password: string; mbCode: string },
  setLoading: Function,
  showMessage: Function,
  navigation: any
) => async (dispatch: typeof store.dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(`/auth/password/update`, data);
    if (res) {
      console.log(res.data);
      showMessage(res.data.message);
      setLoading(false);
    }
  } catch (err) {
    console.log(err);
    if (err && err.response) {
      console.log(err);
      showMessage(err.response.data.message);
      setLoading(false);
    }
  }
};

export const logoutUser = () => async (dispatch: typeof store.dispatch) => {
  console.log("Logged out");
  await localStorage.removeItem("BizzToken");
  delete axios.defaults.headers.common["mb-token"];
  dispatch(setIsLoggedOut({ status: false }));
  window.location.href = "/login";
};

export const setAuthorization = async (token: string) => {
  await localStorage.setItem("BizzToken", token);
  axios.defaults.headers.common["mb-token"] = token;
};

type userData = {
  firstName: string;
  lastName: string;
  email: string;
  handle: string;
  password: string;
};
