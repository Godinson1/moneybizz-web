import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pay_data: {},
  isLoading: false,
  setPaymentLoading: false,
  status: false,
  showBalanceStatus: false,
  error: "",
  success: "",
};

const pay = createSlice({
  name: "pay",
  initialState: initialState,
  reducers: {
    getPayment: (state, action) => {
      state.setPaymentLoading = false;
      state.isLoading = false;
      state.error = "";
      state.pay_data = action.payload;
      return state;
    },
    setPaymentLoading: (state, action) => {
      state.setPaymentLoading = true;
      return state;
    },
    setPaymentError: (state, action) => {
      state.setPaymentLoading = false;
      state.isLoading = false;
      state.error = action.payload;
      return state;
    },
    setUserSuccess: (state, action) => {
      state.setPaymentLoading = false;
      state.isLoading = false;
      state.success = action.payload;
      return state;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      return state;
    },
    showUserBalance: (state, action) => {
      state.showBalanceStatus = action.payload;
      return state;
    },
  },
});

export const {
  setPaymentError,
  setPaymentLoading,
  getPayment,
  setStatus,
  setUserSuccess,
  showUserBalance,
} = pay.actions;

export default pay.reducer;
