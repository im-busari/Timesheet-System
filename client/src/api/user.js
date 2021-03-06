import axios from "axios";

export const get = {
  currentUser: async () => {
    const res = await axios.get("/users/me");
    return res.data;
  },
};

export const post = {
  register: async ({ email, username, password }) => {
    const res = await axios.post("/users/signup", {
      email,
      username,
      password,
    });

    return res.data.user;
  },

  login: async ({ email, password }) => {
    const res = await axios.post("users/signin", {
      email,
      password,
    });

    return res.data.user;
  },

  logout: async () => {
    const res = await axios.post("/users/signout");
    return res.data;
  },
};
