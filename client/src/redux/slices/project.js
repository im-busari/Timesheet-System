import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../api";

const initialState = {
  projects: {},
  error: null,
};

const { reducer, actions } = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetch: (state, action) => {
      state.projects = action.payload;
    },
    fetchError: (state, action) => {
      state.error = action.payload;
    },
    clear: () => initialState,
  },
});

export { reducer as projectReducer, actions as projectAction };

export const getAllProjects = () => {
  return async (dispatch) => {
    try {
      const allProjects = await projects.get.allProjects();
      dispatch(actions.fetch(allProjects));
    } catch (error) {
      dispatch(actions.fetchError(error.message));
    }
  };
};
