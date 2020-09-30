const express = require('express');
const router = express.Router();
const TimesheetController = require('../controllers/TimesheetController');

router.post('/', TimesheetController.createTimesheet);

module.exports = router;
