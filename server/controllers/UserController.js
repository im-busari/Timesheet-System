const bcrypt = require('bcrypt');
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
        res.status(201).send({ user });
      }
    } catch (err) {
      res.status(403).send({ error: err.errors[0].message });
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
        req.session.user = user;
        res.status(200).json({ user });
      } else {
        res.status(403).send({ error: 'Wrong login credentials.' });
      }
    } catch (err) {
      res.status(403).json({ error: `Something went wrong. ${err}` });
    }
  }

  // Logout User - destroy cookie and remove session
  async signout(req, res) {
    try {
      if (req.session.user && req.cookies.user_sid) {
        await res.clearCookie('user_sid');
        res.status(200).send({ success: true });
      } else {
        res.status(400).send({ success: false });
      }
    } catch (err) {
      res.status(500).send({});
    }
  }

  //  Get current user
  async getCurrentUser(req, res) {
    try {
      const user = await req.session.user;
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send({ error: 'User is unauthorized.' });
      }
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }
}

module.exports = new UserController();
