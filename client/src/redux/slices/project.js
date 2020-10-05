import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../api";

const initialState = {
  ids: [],
  byId: {},
  error: null,
};

const { reducer, actions } = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetch: (state, action) => {
      const projects = action.payload;

      projects.forEach((project) => {
        const projectId = project.id;

        if (!state.byId[projectId]) {
          state.ids.push(projectId);
        }

        state.byId[projectId] = project;
      });
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
