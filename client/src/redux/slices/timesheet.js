import { createSlice } from "@reduxjs/toolkit";
import { timesheet } from "../../api";
import { normalize, schema } from "normalizr";
import { useSelector } from "react-redux";

const initialState = {
  ids: [],
  byId: {},
  error: null,
};

// const timesheetSchema = new schema.Entity("timesheets");
// const timesheetsListSchema = new schema.Array(timesheetSchema);

const { reducer, actions } = createSlice({
  name: "timesheets",
  initialState,
  reducers: {
    fetch: (state, action) => {
      const timesheets = action.payload;

      timesheets.forEach((timesheet) => {
        const timesheetId = timesheet.data.id;

        if (!state.byId[timesheetId]) {
          state.ids.push(timesheetId);
        }

        state.byId[timesheetId] = timesheet;
      });

      state.error = null;
    },
    fetchError: (state, action) => {
      state.error = action.payload;
    },
    fetchOne: (state, action) => {
      state.currentTimesheet = action.payload;
      state.error = null;
    },
    fetchOneError: (state, action) => {
      state.error = action.payload;
    },
    create: (state, action) => {
      const timesheetId = action.payload.data.id;

      if (!state.byId[timesheetId]) {
        state.ids.push(timesheetId);
      }

      state.error = null;
      state.byId[timesheetId] = action.payload;
    },
    createError: (state, action) => {
      return { ...state, error: action.payload };
    },
    update: (state, action) => {
      const timesheetId = action.payload.data.id;
      console.log("successs");

      state.byId[timesheetId] = action.payload;
    },
    updateError: (state, action) => {
      return { ...state, error: action.payload };
    },
    delete: (state, action) => {
      const timesheetId = action.payload;

      if (state.timesheets[timesheetId]) {
        delete state.timesheets[timesheetId];
      }
    },
    deleteError: (state, action) => {
      return { ...state, error: action.payload };
    },

    addEmptyEntry: (state, action) => {
      const { timesheetId, projectId } = action.payload;
      let data = [];
      console.log(projectId);
      state.byId[timesheetId].entries.push({
        data: {
          projectId: projectId,
          taskId: null,
        },
        days: [],
      });
    },
    updateDayState: (state, action) => {
      const { timesheetId, entryIndex, dayDate, hours } = action.payload;
      // console.log(entryIndex);
      // find timesheet byId
      // console.log(`Project and task: ${projectId}, ${taskId}`);

      // console.log(timesheetId);
      // console.log(state.ids);
      // console.log(JSON.stringify(state.byId[timesheetId], undefined, 2));
      // console.log(state.byId[timesheetId]);
      const timesheetEntries = state.byId[timesheetId]?.entries;
      if (timesheetEntries.length < 1 || timesheetEntries.length < entryIndex) {
        // state.byId[timesheetId].entries.push({
        //   data: {
        //     timesheetId: timesheetId,
        //     projectId: projectId,
        //     taskId: taskId,
        //   },
        //   days: [],
        // });
      } else {
        // state.byId[timesheetId].entries[entryIndex].data.projectId = projectId;
        // state.byId[timesheetId].entries[entryIndex].data.taskId = taskId;

        // console.log(timesheetId);
        // console.log("Timesheet Entries", timesheetEntries);

        let isChanged = false;
        if (dayDate) {
          state.byId[timesheetId].entries[entryIndex].days.forEach((day) => {
            if (day.id && day.date === dayDate) {
              day.hours = hours;
              isChanged = true;
            } else if (!day.id && day.date === dayDate) {
              day.hours = hours;
              isChanged = true;
            }
          });

          // IT WORKS
          if (!isChanged) {
            state.byId[timesheetId].entries[entryIndex].days.push({
              timesheetEntryId: state.byId[timesheetId]?.entries[entryIndex].id,
              date: dayDate,
              hours: hours,
            });
          }
        }
      }
      // loop entries and compare with entryId
    },

    updateTask: (state, action) => {
      const { timesheetId, entryIndex, taskId } = action.payload;
      console.log(taskId);
      state.byId[timesheetId].entries[entryIndex].data.taskId = taskId;
    },
    updateProject: (state, action) => {
      const { timesheetId, entryIndex, projectId } = action.payload;
      console.log(projectId);
      state.byId[timesheetId].entries[entryIndex].data.projectId = projectId;
    },

    clearCurrent: (state) => {
      return { ...state, currentTimesheetId: null };
    },
  },
});

export { reducer as timesheetsReducer, actions as timesheetActions };

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

export const updateTimesheet = ({ currentTimesheet, submitted }) => {
  return async (dispatch) => {
    try {
      // console.log(currentTimesheet);
      const updatedTimesheet = await timesheet.patch.update({
        timesheetId: currentTimesheet.data.id,
        entries: currentTimesheet.entries,
        submitted,
      });

      console.log(updatedTimesheet);
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

export const addEmptyEntry = ({ timesheetId, projectId }) => {
  return (dispatch) => {
    dispatch(actions.addEmptyEntry({ timesheetId, projectId }));
  };
};

export const clearCurrentTimesheet = () => {
  return (dispatch) => {
    dispatch(actions.clearCurrent());
  };
};

export const updateDay = ({
  timesheetId,
  entryIndex,
  dayDate,
  hours,
  projectId,
  taskId,
}) => {
  return (dispatch) => {
    dispatch(
      actions.updateDayState({
        timesheetId,
        entryIndex,
        dayDate,
        hours,
        projectId,
        taskId,
      })
    );
  };
};

export const updateProject = ({ projectId, entryIndex, timesheetId }) => {
  return (dispatch) => {
    dispatch(actions.updateProject({ projectId, entryIndex, timesheetId }));
  };
};

export const updateTask = ({ taskId, entryIndex, timesheetId }) => {
  return (dispatch) => {
    dispatch(actions.updateTask({ taskId, entryIndex, timesheetId }));
  };
};
