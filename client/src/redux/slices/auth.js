import { createSlice } from "@reduxjs/toolkit";
import { auth, users } from "src/api";

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
			userId: action?.payload?.id,
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

export const login = ({ username, password }) => {
	return async (dispatch) => {
		const user = await auth.post
			.login({ username, password })
			.catch((error) => {
				dispatch(actions.setUserFail(error?.response?.data?.message));
			});
		dispatch(actions.setUser(user));
	};
};

export const register = ({ name, username, password }) => {
	return async (dispatch) => {
		const user = await auth.post
			.register({ name, username, password })
			.catch((error) => {
				dispatch(actions.setUserFail(error?.response?.data?.message));
			});

		dispatch(actions.setUser(user));
	};
};

export const logout = () => {
	return async (dispatch) => {
		await auth.post.logout();
		dispatch(actions.logout());
	};
};

export const checkSession = () => {
	return async (dispatch) => {
		// Empty catch block, since 401s here are normal and don't need handling
		// Such responses will be gotten, if the user has no session open, and we just
		// redirect the user to the login page
		const user = await users.get.current().catch((e) => {});
		dispatch(actions.setUser(user));
		dispatch(actions.checkSession());
	};
};
