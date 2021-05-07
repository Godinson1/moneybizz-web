import { setSidebarOpen } from "../slices/dashboard";
import { clearData, clearPayData } from "../index";
import store from "../store";

export const openSidebar = (dispatch: typeof store.dispatch) => {
  dispatch(setSidebarOpen());
};

export const clearMessage = (dispatch: typeof store.dispatch) => {
  dispatch(clearData());
};

export const clearPayMessage = (dispatch: typeof store.dispatch) => {
  dispatch(clearPayData());
};
