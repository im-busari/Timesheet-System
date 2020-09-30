const {Timesheet} = require('../models');

class TimesheetController {
    async getTimesheetsByUserId(req, res) {
        try {
            const timesheets = await Timesheet.findAll({
                where: {
                    userId: req.params.userId,
                }
            });

            if (timesheets) {
                res.status(201).send(timesheets);
            } else {
                res.status(404).send({error: 'The user doesn\'t have any timesheets!'});
            }

        } catch (err) {
            res.status(403).json(err);
        }
    }

    async getTimesheetById(req, res) {
        try {
            const timesheet = await Timesheet.findByPk(req.params.id);

            if (timesheet) {
                res.status(201).send(timesheet);
            } else {
                res.status(404).send({error: 'Timesheet with the given name doesn\'t exist!'});
            }

        } catch (err) {
            res.status(403).json(err);
        }
    }

    async createTimesheet(req, res) {
        try {
            // Finds if the user already has a timesheet for this week
            const allTimesheet = await Timesheet.findOne({
                where: {
                    startDate: req.body.startDate,
                    userId: req.body.userId,
                }
            });

            let timesheet;

            if (!allTimesheet) {
                timesheet = await Timesheet.create({
                    status: 'Open',
                    startDate: req.body.startDate,
                    userId: req.body.userId,
                });
            }

            if (timesheet) {
                res.status(201).send(timesheet.toJSON());
            } else {
                res.status(409).send({error: 'Already created!'});
            }

        } catch (err) {
            res.status(403).json(err);
        }
    }

    async deleteTimesheet(req, res) {
        try {
            // Finds one by user id and start date.
            const timesheet = await Timesheet.findOne({
                where: {
                    startDate: req.body.startDate,
                    userId: req.body.userId
                }
            });

            if (timesheet) {
                await Timesheet.destroy({
                    where: {
                        id: timesheet.id
                    }
                });
                res.status(201).send({success: 'Delete successfully!'});
            } else {
                res.status(409).json({error: 'Timesheet doesn\'t exist'})
            }
        } catch (err) {
            res.status(403).json(err);
        }
    }
}

module.exports = new TimesheetController();
