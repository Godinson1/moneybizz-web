import {
  setPaymentLoading,
  getPayment,
  setPaymentError,
  getUserDetail,
} from "../index";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import { store } from "..";
import { redirectUser } from "../helpers";
import { bankDataType, cardType, OtpType } from "../types";

export const payWithBank =
  (data: bankDataType, setOtpOpen: Function) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setPaymentLoading(true));
      const res = await axios.post(`/pay/fund/bank`, data);
      console.log(res.data);
      if (res.data) {
        dispatch(getPayment(res.data));
        setOtpOpen(true);
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setPaymentError(err.response.data.message));
      }
    }
  };

export const payWithExistingCard =
  (
    data: cardType,
    setSuccessOpen: Function,
    history: RouteComponentProps["history"],
    url: string
  ) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setPaymentLoading(true));
      const res = await axios.post(`/pay/fund`, data);
      if (res.data) {
        dispatch(getPayment(res.data));
        setSuccessOpen(true);
        setTimeout(() => {
          setSuccessOpen(false);
          redirectUser(url, history);
          dispatch(getUserDetail());
        }, 5000);
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setPaymentError(err.response.data.message));
      }
    }
  };

export const sendOtp =
  (
    data: OtpType,
    setSuccessOpen: Function,
    history: RouteComponentProps["history"],
    url: string
  ) =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(setPaymentLoading(true));
      const res = await axios.post(`/pay/otp`, data);
      console.log(res.data);
      if (res.data) {
        dispatch(getPayment(res.data));
        setSuccessOpen(true);
        setTimeout(() => {
          setSuccessOpen(false);
          redirectUser(url, history);
          dispatch(getUserDetail());
        }, 5000);
      }
    } catch (err) {
      if (err && err.response) {
        console.log(err.response.data);
        dispatch(setPaymentError(err.response.data.message));
      }
    }
  };
