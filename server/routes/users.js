const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const isGuest = require('../middlewares/isGuest');
const isAuth = require('../middlewares/isAuth');

router.post('/signup', isGuest, UserController.signup);
router.post('/signin', isGuest, UserController.signin);
router.post('/signout', isAuth, UserController.signout);
router.get('/me', UserController.getCurrentUser);

module.exports = router;
