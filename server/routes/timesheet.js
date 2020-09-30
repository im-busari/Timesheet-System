const express = require('express');
const router = express.Router();
const TimesheetController = require('../controllers/TimesheetController');

router.post('/', TimesheetController.createTimesheet);
router.delete('/', TimesheetController.deleteTimesheet);

module.exports = router;
