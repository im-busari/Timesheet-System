import { combineReducers } from "@reduxjs/toolkit";

const appReducer = combineReducers({});

// This wrapper allows for a full-state wipe, when auth/logout
// is called, instead of only locally wiping the auth store
export const rootReducer = (state, action) => {
	if (action.toString() === "auth/logout") {
		state = { auth: { isSessionChecked: true } };
	}

	return appReducer(state, action);
};