import axios from "axios";

export const get = {
  allTimesheetsForUser: async () => {
    const res = await axios.get(`/timesheets/user/`);
    return res.data;
  },

  timesheetById: async ({ timesheetId }) => {
    const res = await axios.get(`/timesheet/${timesheetId}`);
    return res.data;
  },
};

export const post = {
  create: async ({ startDate }) => {
    const res = await axios.post("/timesheets", {
      startDate,
    });

    return res.data;
  },
};

export const del = {
  delete: async ({ timesheetId }) => {
    const res = await axios.delete(`/timesheets/${timesheetId}`);
    return res.data;
  },
};
