import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  status: false,
  error: "",
  success: "",
};

const dashboard = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setSidebarOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
      return state;
    },
    clearData: (state) => {
      state.success = "";
      state.error = "";
      return state;
    },
  },
});

export const { setSidebarOpen } = dashboard.actions;

export default dashboard.reducer;
