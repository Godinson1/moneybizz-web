import { setPaymentLoading, getPayment, setPaymentError } from "../index";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import { store } from "..";

type bankDataType = {
  account_number: string;
  amount: string;
  code: string;
};

export const payWithBank = (data: bankDataType, setOtpOpen: Function) => async (
  dispatch: typeof store.dispatch
) => {
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

type OtpType = { otp: string };

export const sendOtp = (
  data: OtpType,
  setSuccessOpen: Function,
  history: RouteComponentProps["history"]
) => async (dispatch: typeof store.dispatch) => {
  try {
    dispatch(setPaymentLoading(true));
    const res = await axios.post(`/pay/otp`, data);
    console.log(res.data);
    if (res.data) {
      dispatch(getPayment(res.data));
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
        history.push("/home");
      }, 5000);
    }
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.data);
      dispatch(setPaymentError(err.response.data.message));
    }
  }
};
