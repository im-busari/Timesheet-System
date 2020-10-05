// middleware function to check for logged-in users
module.exports = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    next();
  } else {
    res.status(403).send('You are unauthenticated user. Please log in.');
  }
};
