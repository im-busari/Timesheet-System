const express = require('express');
const router = express.Router();
const TimesheetEntryController = require('../controllers/TimesheetEntryController');

router.get('/days/:timesheetEntryId', TimesheetEntryController.getEntryDays);

module.exports = router;
