import { setPaymentLoading, getPayment, setPaymentError } from "../index";
import axios from "axios";
import { store } from "..";

type bankDataType = {
  account: string;
  amount: string;
  code: string;
};

export const payWithBank = (data: bankDataType) => async (
  dispatch: typeof store.dispatch
) => {
  try {
    dispatch(setPaymentLoading(true));
    const res = await axios.post(`/pay/fund/bank`, data);
    console.log(res.data);
    if (res.data) {
      dispatch(getPayment(res.data));
    }
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.data);
      dispatch(setPaymentError(err.response.data.message));
    }
  }
};
