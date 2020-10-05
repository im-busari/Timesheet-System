import axios from "axios";

export const get = {
  allProjects: async () => {
    const res = await axios.get("/projects");
    return res.data;
  },

  projectById: async (id) => {
    const res = await axios.get(`/projects/${id}`);
    return res.data;
  },
};
