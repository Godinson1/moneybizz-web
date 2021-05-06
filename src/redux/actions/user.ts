import {
  setUserLoading,
  getUser,
  setUserError,
  setProfilePhotoLoading,
  setProfilePhoto,
} from "../slices/user";
import axios from "axios";
import { store } from "..";

export const activateUser = (
  data: codeData,
  setLoading: Function,
  showMessage: Function
) => async (dispatch: typeof store.dispatch) => {
  try {
    setLoading(true);
    const res = await axios.post(`user/activate`, data);
    if (res) {
      setLoading(false);
      const { message } = res.data;
      showMessage(message);
      console.log(res.data);
      //dispatch(setIsLogin({ status: true, token }));
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

export const updateProfilePhoto = (data: FormData) => async (
  dispatch: typeof store.dispatch
) => {
  try {
    dispatch(setProfilePhotoLoading(true));
    const res = await axios.put(`user/photo`, data);
    console.log(res.data);
    if (res.data) {
      dispatch(setProfilePhoto(res.data));
    }
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.data);
      dispatch(setUserError(err.response.data.message));
    }
  }
};

type codeData = {
  code: string;
};
