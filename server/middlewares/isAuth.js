const jwt = require('jsonwebtoken');
const constants = require('../config/env');

module.exports = (req, res, next) => {
  // TODO: Check
  const token = req.headers.authorization;

  if (token) {
    const onlyToken = token.slice(7, token.length); // => Bearer [token]
    jwt.verify(onlyToken, constants.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: 'Invalid Token' });
      }
      req.user = decode;
      next();
    });
  } else {
    return res.status(401).send({ msg: 'You are unauthorized user.' });
  }
};
