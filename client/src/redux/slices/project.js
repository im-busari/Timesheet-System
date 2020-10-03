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
      const allProjects = action.payload;

      for (const project of allProjects) {
        const projectId = project.id;

        if (!state.projects[projectId]) {
          state.projects[projectId] = {};
        }

        state.projects[projectId] = project;
      }
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
      const res = await projects.get.allProjects();
      const allProjects = res.projects;

      dispatch(actions.fetch(allProjects));
    } catch (error) {
      dispatch(actions.fetchError(error.message));
    }
  };
};
