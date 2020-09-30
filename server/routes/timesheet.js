const express = require('express');
const router = express.Router();
const TimesheetController = require('../controllers/TimesheetController');

router.get('/user/:userID', TimesheetController.getTimesheetsByUserId);
router.get('/:id', TimesheetController.getTimesheetById);
router.post('/', TimesheetController.createTimesheet);
router.delete('/', TimesheetController.deleteTimesheet);

module.exports = router;
