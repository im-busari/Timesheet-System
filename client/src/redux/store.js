import { configureStore as createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const configureStore = () => {
	const store = createStore({ reducer: rootReducer });

	// Ensures hot reloading of the redux store
	if (process.env.NODE_ENV !== "production" && module.hot) {
		module.hot.accept("./rootReducer", () => store.replaceReducer(rootReducer));
	}

	return store;
};
