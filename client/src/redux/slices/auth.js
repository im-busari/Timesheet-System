import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../api";

const initialState = {
  userId: null,
  error: null,
  isSessionChecked: false,
};

const { reducer, actions } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      userId: action.payload.id,
    }),
    setUserFail: (state, action) => {
      return { ...state, error: action.payload, userId: null };
    },
    checkSession: (state) => ({ ...state, isSessionChecked: true }),
    logout: () => {
      return { ...initialState, isSessionChecked: true };
    },
  },
});

export { reducer as authReducer, actions as authActions };

export const login = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const currentUser = await user.post.login({ email, password });
      dispatch(actions.setUser(currentUser));
    } catch (error) {
      dispatch(actions.setUserFail(error.message));
    }
  };
};

export const register = ({ email, username, password }) => {
  return async (dispatch) => {
    try {
      const newUser = await user.post.register({ email, username, password });
      dispatch(actions.setUser(newUser));
    } catch (error) {
      dispatch(actions.setUserFail(error.message));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    await user.post.logout();
    dispatch(actions.logout());
  };
};

export const checkSession = () => {
  return async (dispatch) => {
    try {
      const currentUser = await user.get.currentUser();
      dispatch(actions.setUser(currentUser));
      dispatch(actions.checkSession());
    } catch (error) {
      dispatch(actions.checkSession());
    }
  };
};
