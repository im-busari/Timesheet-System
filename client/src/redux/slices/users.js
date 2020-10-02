import { createSlice } from "@reduxjs/toolkit";
import { populateUser } from "./extraReducers/users";
import { authActions } from "./auth";

const initialState = {
  usersById: {},
};

const { reducer, actions } = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetch: populateUser,
    clearState: () => initialState,
  },
  extraReducers: {
    [authActions.setUser]: populateUser,
  },
});

export { reducer as userReducer, actions as userActions };
