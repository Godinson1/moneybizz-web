import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  isProfilePhotoLoading: false,
  isUserLoading: false,
  status: false,
  showBalanceStatus: false,
  error: "",
  success: "",
};

const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUser: (state, action) => {
      state.isUserLoading = false;
      state.isProfilePhotoLoading = false;
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
      return state;
    },
    setProfilePhoto: (state, action) => {
      state.isProfilePhotoLoading = false;
      state.success = action.payload.message;
      return state;
    },
    clearData: (state) => {
      state.success = "";
      state.error = "";
      return state;
    },
    setUserLoading: (state, action) => {
      state.isUserLoading = true;
      return state;
    },
    setProfilePhotoLoading: (state, action) => {
      state.isProfilePhotoLoading = true;
      return state;
    },
    setUserError: (state, action) => {
      state.isUserLoading = false;
      state.isLoading = false;
      state.isProfilePhotoLoading = false;
      state.error = action.payload;
      return state;
    },
    setUserSuccess: (state, action) => {
      state.isUserLoading = false;
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
  setUserError,
  setUserLoading,
  getUser,
  setStatus,
  setUserSuccess,
  showUserBalance,
  setProfilePhotoLoading,
  setProfilePhoto,
  clearData,
} = user.actions;

export default user.reducer;
