import { createSlice } from "@reduxjs/toolkit";
import { timesheet } from "../../api";

const initialState = {
  timesheets: {},
  getError: null,
  createError: null,
};

const { reducer, actions } = createSlice({
  name: "timesheets",
  initialState,
  reducers: {
    fetch: (state, action) => {
      const timesheets = action.payload;

      for (const timesheet of timesheets) {
        const timesheetId = timesheet.data.id;

        if (!state.timesheets[timesheetId]) {
          state.timesheets[timesheetId] = {};
        }

        state.timesheets[timesheetId] = timesheet;
      }

      state.getError = null;
    },
    fetchError: (state, action) => {
      return { ...state, getError: action.payload };
    },
    create: (state, action) => {
      const timesheetId = action.payload.data.id;

      if (!state.timesheets[timesheetId]) {
        state.timesheets[timesheetId] = action.payload;
      }

      state.createError = null;
    },
    createError: (state, action) => {
      return { ...state, createError: action.payload };
    },
    delete: (state, action) => {
      const timesheetId = action.payload;

      if (state.timesheets[timesheetId]) {
        delete state.timesheets[timesheetId];
      }
    },
    deleteError: (state, action) => {
      return { ...state, deleteError: action.payload };
    },
  },
});

export { reducer as timesheetReducer, actions as timesheetActions };

export const getTimesheetsForUser = () => {
  return async (dispatch) => {
    try {
      const timesheetsRaw = await timesheet.get.allTimesheetsForUser();
      const timesheets = timesheetsRaw.map((ts) => ts.timesheet);
      dispatch(actions.fetch(timesheets));
    } catch (error) {
      dispatch(actions.fetchError(error.message));
    }
  };
};

export const createTimesheet = ({ startDate }) => {
  return async (dispatch) => {
    try {
      const newTimesheetRaw = await timesheet.post.create({ startDate });
      const newTimesheet = { data: newTimesheetRaw, entries: [] };

      dispatch(actions.create(newTimesheet));
      console.log("new", newTimesheet);
    } catch (error) {
      dispatch(actions.createError(error.message));
    }
  };
};

export const deleteTimesheet = ({ id }) => {
  return async (dispatch) => {
    try {
      await timesheet.del.delete({ timesheetId: id });
      dispatch(actions.delete(id));
    } catch (error) {
      dispatch(actions.deleteError(error.message));
    }
  };
};
