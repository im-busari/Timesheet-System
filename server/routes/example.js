const express = require('express');
const router = express.Router();
const ExampleController = require('../controllers/ExampleController');

router.get('/', ExampleController.getExample);

module.exports = router;
