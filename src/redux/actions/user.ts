import {
  setUserLoading,
  getUser,
  setUserError,
  setProfilePhotoLoading,
  setProfilePhoto,
  setAutosaveSetting,
  setAutosaveSettingLoading,
  setUserSuccess,
  setLoading as setLoadingMain,
} from "../slices/user";
import axios from "axios";
import { store } from "..";
import { codeData, settingsData, verifyUserType } from "../types";
import { RouteComponentProps } from "react-router-dom";

export const activateUser =
  (
    data: codeData,
    setLoading: Function,
    showMessage: Function,
    history: RouteComponentProps["history"]
  ) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      setLoading(true);
      const res = await axios.post(`user/activate`, data);
      if (res) {
        setLoading(false);
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

export const getUserDetail = () => async (dispatch: typeof store.dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const res = await axios.get(`user/details`);
    if (res.data) {
      console.log(res.data);
      dispatch(getUser(res.data));
    }
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.data);
      dispatch(setUserError(err.response.data.message));
    }
  }
};

export const updateProfilePhoto =
  (data: FormData) => async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setProfilePhotoLoading(true));
      const res = await axios.put(`user/photo`, data);
      if (res.data) {
        dispatch(setProfilePhoto(res.data));
      }
    } catch (err) {
      if (err && err.response) {
        dispatch(setUserError(err.response.data.message));
      }
    }
  };

export const updateAutosaveSettings =
  (
    data: settingsData,
    history: RouteComponentProps["history"],
    startNow: string
  ) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setAutosaveSettingLoading(true));
      const res = await axios.put(`user/autosave`, data);
      console.log(res.data);
      if (res.data) {
        if (startNow === "true") {
          dispatch(switchOnAutosave(history));
          localStorage.setItem("autosave", startNow);
        }
        dispatch(setAutosaveSetting(res.data));
        history.push("/save/b/bizzbank");
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setUserError(err.response.data.message));
      }
    }
  };

export const switchOffAutosave =
  (data: { active: boolean }, history: RouteComponentProps["history"]) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setAutosaveSettingLoading(true));
      const res = await axios.put(`user/autosave/switch`, data);
      console.log(res.data);
      if (res.data) {
        dispatch(setAutosaveSetting(res.data));
        history.push("/save/b/bizzbank");
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setUserError(err.response.data.message));
      }
    }
  };

export const switchOnAutosave =
  (history: RouteComponentProps["history"]) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setAutosaveSettingLoading(true));
      console.log("moving");
      const res = await axios.post(`pay/auto-fund`);
      console.log(res.data);
      if (res.data) {
        dispatch(setAutosaveSetting(res.data));
        history.push("/save/b/bizzbank");
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setUserError(err.response.data.message));
      }
    }
  };

export const verifyUser =
  (
    data: verifyUserType,
    history: RouteComponentProps["history"],
    url: string
  ) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setLoadingMain(true));
      const res = await axios.put(`user/verify-user`, data);
      console.log(res.data);
      if (res.data) {
        dispatch(setUserSuccess(res.data));
        history.push(`${url}/otp`);
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setUserError(err.response.data.message));
      }
    }
  };

export const verifyUserOtp =
  (data: { otp: number }, history: RouteComponentProps["history"]) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setLoadingMain(true));
      const res = await axios.post(`user/verify-user-otp`, data);
      console.log(res.data);
      if (res.data) {
        dispatch(setUserSuccess(res.data));
        history.push(`/home`);
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setUserError(err.response.data.message));
      }
    }
  };

export const requestFund =
  (
    data: { amount: string; message: string; handle: string },
    history: RouteComponentProps["history"]
  ) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setLoadingMain(true));
      const res = await axios.post(`user/request-fund`, data);
      if (res.data) {
        dispatch(setUserSuccess(res.data));
        history.push(`/home`);
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setUserError(err.response.data.message));
      }
    }
  };

export const singleTransfer =
  (
    data: { amount: string; reason: string; handle: string },
    history: RouteComponentProps["history"]
  ) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setLoadingMain(true));
      const res = await axios.post(`pay/transfer/single`, data);
      if (res.data) {
        dispatch(setUserSuccess(res.data));
        history.push(`/home`);
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setUserError(err.response.data.message));
      }
    }
  };

export const bulkTransfer =
  (
    data: {
      amount: string;
      reason: string;
      bizzers: Array<{ handle: string }>;
    },
    history: RouteComponentProps["history"]
  ) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setLoadingMain(true));
      const res = await axios.post(`pay/transfer/bulk`, data);
      if (res.data) {
        dispatch(setUserSuccess(res.data));
        history.push(`/home`);
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setUserError(err.response.data.message));
      }
    }
  };
