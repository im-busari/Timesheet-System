import { createSlice } from "@reduxjs/toolkit";
import { timesheet } from "../../api";
import { normalize, schema } from "normalizr";
import { useSelector } from "react-redux";

const initialState = {
  ids: [],
  byId: {},
  error: null,
  isDeleting: false,
  currentTimesheetId: null,
  counter: 0,
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
      state.currentTimesheetId = timesheetId;
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
    deleteStart: (state, action) => {
      state.isDeleting = true;
    },
    delete: (state, action) => {
      const timesheetId = action.payload.timesheetId;

      delete state.byId[timesheetId];
      state.ids = state.ids.filter((id) => id !== timesheetId);

      state.isDeleting = false;
    },
    deleteError: (state, action) => {
      return { ...state, error: action.payload };
    },

    addEmptyEntry: (state, action) => {
      const { timesheetId, projectId } = action.payload;
      let data = [];
      console.log(projectId);
      state.byId[timesheetId].entries.push({
        index: state.counter++,
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

    // TODO: Complete
    deleteEntry: (state, action) => {
      console.log("deleteAction");

      const timesheetId = action.payload.timesheetId;
      // const project = action.payload.project;
      // const task = action.payload.task;

      const entryIndex = action.payload.entryIndex;

      state.byId[timesheetId].entries = state.byId[timesheetId]?.entries.filter(
        (entry, index) => index !== entryIndex
      );

      // const leftOnes = [];
      //
      // for (const te in state.byId[timesheetId].entries) {
      //     if (index === te) {
      //         leftOnes.push(state.byId[timesheetId].entries[te]);
      //     }
      // }
      //
      // state.byId[timesheetId].entries = leftOnes;

      // state.byId[timesheetId].entries = state.byId[timesheetId].entries.filter((item) => {
      //     // console.log(JSON.stringify(item, undefined, 2));
      //     return (item.data.projectId !== project || item.data.taskId !== task) ||
      //         (item.data.projectId !== project && item.data.taskId !== task);
      // });
      // console.log(
      //   JSON.stringify(state.byId[timesheetId].entries, undefined, 2)
      // );
      // console.log(entryIndex);
      // state.byId[timesheetId].entries.splice(entryIndex, 0);
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

export const deleteTimesheet = ({ timesheetId }) => {
  return async (dispatch) => {
    try {
      dispatch(actions.deleteStart());
      await timesheet.del.delete({ timesheetId: timesheetId });
      dispatch(actions.delete({ timesheetId }));
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

export const deleteTimesheetEntry = ({
  entryId,
  task,
  project,
  entryIndex,
  timesheetId,
}) => {
  return async (dispatch) => {
    try {
      if (entryId) {
        await timesheet.del.deleteEntry({ timesheetEntryId: entryId });
      }
      dispatch(actions.deleteEntry({ timesheetId, task, project, entryIndex }));
    } catch (error) {
      dispatch(actions.deleteError(error.message));
    }
  };
};
