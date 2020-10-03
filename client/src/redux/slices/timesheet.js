import { createSlice } from "@reduxjs/toolkit";
import { timesheet } from "../../api";

const initialState = {
  timesheets: {},
  currentTimesheetId: null,
  // currentTimesheet: {},
  getError: null,
  createError: null,
  updateError: null,
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
    fetchOne: (state, action) => {
      state.currentTimesheet = action.payload;
      state.getError = null;
    },
    fetchOneError: (state, action) => {
      state.getError = action.payload;
    },
    create: (state, action) => {
      const timesheetId = action.payload.data.id;

      if (!state.timesheets[timesheetId]) {
        state.timesheets[timesheetId] = action.payload;
      }

      state.createError = null;
      state.currentTimesheetId = timesheetId;
    },
    createError: (state, action) => {
      return { ...state, createError: action.payload };
    },
    update: (state, action) => {
      const timesheetId = action.payload.data.id;

      state.timesheets[timesheetId] = action.payload;
    },
    updateError: (state, action) => {
      return { ...state, updateError: action.payload };
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

    addEmptyEntry: (state, action) => {
      const timesheetId = action.payload;

      if (!state.timesheets[timesheetId]) {
        state.timesheets[timesheetId] = {};
      }

      if (!state.timesheets[timesheetId].entries) {
        state.timesheets[timesheetId].entries = [];
      }

      state.timesheets[timesheetId].entries.push({
        projectId: null,
        taskId: null,
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0,
      });
    },

    clearCurrent: (state) => {
      return { ...state, currentTimesheetId: null };
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

export const getTimesheetById = ({ timesheetId }) => {
  return async (dispatch) => {
    try {
      const timesheetRaw = await timesheet.get.timesheetById({ timesheetId });
      const timeshetFormatted = timesheetRaw.timesheet;
      dispatch(actions.fetchOne(timeshetFormatted));
    } catch (error) {
      dispatch(actions.fetchOneError(error.message));
    }
  };
};

export const createTimesheet = ({ startDate }) => {
  return async (dispatch) => {
    try {
      const newTimesheetRaw = await timesheet.post.create({ startDate });
      const newTimesheet = { data: newTimesheetRaw, entries: [] };

      dispatch(actions.create(newTimesheet));
    } catch (error) {
      dispatch(actions.createError(error.message));
    }
  };
};

export const updateTimesheet = ({ id, entries }) => {
  return async (dispatch) => {
    try {
      const updatedTimesheet = await timesheet.patch.update({
        timesheetId: id,
        entries,
      });

      dispatch(actions.update(updatedTimesheet));
    } catch (error) {
      dispatch(actions.updateError(error.message));
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

export const addEmptyEntry = ({ timesheetId }) => {
  return (dispatch) => {
    dispatch(actions.addEmptyEntry(timesheetId));
  };
};

export const clearCurrentTimesheet = () => {
  return (dispatch) => {
    dispatch(actions.clearCurrent());
  };
};
