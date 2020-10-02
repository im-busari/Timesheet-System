import { createSlice } from "@reduxjs/toolkit";
import { timesheet } from "../../api";

const initialState = {
  timesheets: [],
  getError: null,
  createError: null,
};

const { reducer, actions } = createSlice({
  name: "timesheets",
  initialState,
  reducers: {
    fetch: (state, action) => {
      return { ...state, timesheets: action.payload };
    },
    fetchError: (state, action) => {
      return { ...state, getError: action.payload };
    },
    create: (state, action) => {
      state.timesheets.push(action.payload);
    },
    createError: (state, action) => {
      return { ...state, createError: action.payload };
    },
  },
});

export { reducer as timesheetReducer, actions as timesheetActions };

export const getTimesheetsForUser = () => {
  return async (dispatch) => {
    try {
      const timesheets = await timesheet.get.allTimesheetsForUser();
      console.log(timesheets);
      dispatch(actions.fetch(timesheets));
    } catch (error) {
      dispatch(actions.fetchError(error.message));
    }
  };
};

export const createTimesheet = ({ startDate }) => {
  return async (dispatch) => {
    try {
      const newTimesheet = await timesheet.post.create({ startDate });
      dispatch(actions.create(newTimesheet));
    } catch (error) {
      dispatch(actions.createError(error.message));
    }
  };
};
