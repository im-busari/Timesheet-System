const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/isAuth');
const { User } = require('../models');

// route for user signup
router
  .route('/signup')
  .get(isAuth, (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');
  })
  .post((req, res) => {
    console.log('post');
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => {
        console.log(user.dataValues);
        req.session.user = user.dataValues;
        res.redirect('/dashboard');
      })
      .catch((error) => {
        res.send(error);
        res.redirect('/signup');
      });
  });

// route for user's dashboard
router.get('/dashboard', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.sendFile(__dirname + '/public/dashboard.html');
  } else {
    res.redirect('/login');
  }
});

router.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid');
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
