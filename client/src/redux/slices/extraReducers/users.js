export const populateUser = (state, action) => {
  const userRaw = action?.payload;
  const { id: userId, email, username } = userRaw;
  const user = { email, username };

  if (user) {
    state.usersById[userId] = user;
  }
};
