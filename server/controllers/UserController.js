const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const constants = require('../config/env');
const { User } = require('../models');

class UserController {
  //  Register user
  async signup(req, res) {
    try {
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password, // Hashing set function inside the module
      });
      if (user) {
        req.session.user = user;
        res.status(201).send(user.toJSON());
      }
    } catch (err) {
      res.status(403).send(err.errors[0].message);
    }
  }

  //  Login User
  async signin(req, res) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email },
      });

      if (
        user &&
        req.body.password &&
        bcrypt.compareSync(req.body.password, user.password)
      ) {
        const token = jwt.sign({ user }, constants.JWT_SECRET, {
          expiresIn: '24h',
        });
        req.session.user = user;
        res.status(200).json({ token });
      } else {
        res.status(403).send('Wrong login credentials.');
      }
    } catch (err) {
      res.status(403).json(`Something went wrong: ${err}`);
    }
  }
}

module.exports = new UserController();
