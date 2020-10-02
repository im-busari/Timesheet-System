const express = require('express');
const router = express.Router();
const TimesheetController = require('../controllers/TimesheetController');
const isAuth = require('../middlewares/isAuth');

router.get('/user', isAuth, TimesheetController.getTimesheetsByUserId);
router.get('/:id', isAuth, TimesheetController.getTimesheetById);
router.post('/', isAuth, TimesheetController.createTimesheet);
router.patch('/:id', isAuth, TimesheetController.updateTimesheet);
router.delete('/:id', isAuth, TimesheetController.deleteTimesheet);

module.exports = router;
