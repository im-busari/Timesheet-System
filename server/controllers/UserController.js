const jwt = require('jsonwebtoken');
const { User } = require('../models');

class UserController {
  async signup(req, res) {
    try {
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password, // Hashing set function inside the module
      });
      if (user) {
        res.status(201).send(user.toJSON());
      }
    } catch (err) {
      res.status(403).send(err.errors[0].message);
    }
  }
}

module.exports = new UserController();
