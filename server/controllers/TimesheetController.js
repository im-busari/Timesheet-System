const {Timesheet} = require('../models');

class TimesheetController {

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
