import { setSidebarOpen } from "../slices/dashboard";
import { clearData } from "../index";
import store from "../store";

export const openSidebar = (dispatch: typeof store.dispatch) => {
  dispatch(setSidebarOpen());
};

export const clearMessage = (dispatch: typeof store.dispatch) => {
  dispatch(clearData());
};
