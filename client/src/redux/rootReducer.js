import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user";

const appReducer = combineReducers({
  user: userReducer,
});

// This wrapper allows for a full-state wipe, when auth/logout
// is called, instead of only locally wiping the auth store
export const rootReducer = (state, action) => {
  if (action.toString() === "user/logout") {
    state = { user: { isSessionChecked: true } };
  }

  return appReducer(state, action);
};
