const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const isGuest = require('../middlewares/isGuest');

router.post('/signup', isGuest, UserController.signup);
router.post('/signin', isGuest, UserController.signin);

module.exports = router;
