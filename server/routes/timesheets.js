const express = require('express');
const router = express.Router();
const TimesheetController = require('../controllers/TimesheetController');
const isAuth = require('../middlewares/isAuth');

router.get('/user', isAuth, TimesheetController.getTimesheetsByUserId);
router.get('/:timesheetId', isAuth, TimesheetController.getTimesheetById);
router.post('/', isAuth, TimesheetController.createTimesheet);
router.patch('/:timesheetId', isAuth, TimesheetController.updateTimesheet); // TODO: put isAuth
router.delete('/:timesheetId', isAuth, TimesheetController.deleteTimesheet);

//  Entries
router.get(
  '/entries/days/:timesheetEntryId',
  TimesheetController.getTimesheetEntryDays
);
router.delete(
  '/entries/:timesheetEntryId',
  isAuth,
  TimesheetController.deleteTimesheetEntry
);

module.exports = router;
