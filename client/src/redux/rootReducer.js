import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { userReducer } from "./slices/users";

const appReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
});

// This wrapper allows for a full-state wipe, when auth/logout
// is called, instead of only locally wiping the auth store
export const rootReducer = (state, action) => {
  if (action.toString() === "auth/logout") {
    state = { user: { isSessionChecked: true } };
  }

  return appReducer(state, action);
};
