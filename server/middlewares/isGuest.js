// middleware function to check for logged-in users
module.exports = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res
      .status(403)
      .send('You are already authenticated and this route is only for guests.');
  } else {
    next();
  }
};
