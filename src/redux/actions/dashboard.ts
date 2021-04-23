import { setSidebarOpen } from "../slices/dashboard";
import store from "../store";

export const openSidebar = (dispatch: typeof store.dispatch) => {
  dispatch(setSidebarOpen());
};
