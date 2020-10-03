const {Timesheet, TimesheetEntry, Day} = require('../models');
const uuidValidator = require('../utils/validateUuid');
const getUserId = require('../utils/getUserId');

class TimesheetController {
    async getTimesheetsByUserId(req, res) {
        try {
            const timesheets = await Timesheet.findAll({
                where: {
                    userId: getUserId(req),
                },
            });

            if (timesheets.length !== 0) {
                const result = [];
                const entries = [];

                for (const timesheet in timesheets) {
                    const element = {};
                    const current = timesheets[timesheet];
                    const entriesResult = await current.getTimesheetEntries();

                    for (const index in entriesResult) {
                        const entryFromDB = await TimesheetEntry.findByPk(
                            entriesResult[index].id
                        );
                        const daysForEntry = await entryFromDB.getDays();
                        entries.push({data: entriesResult[index], days: daysForEntry});
                    }

                    element.data = current;
                    element.entries = entries;

                    result.push({timesheet: element});
                }

                res.status(201).send(result);
            } else {
                res
                    .status(404)
                    .send({error: "The user doesn't have any timesheets!"});
            }
        } catch (err) {
            res.status(403).json(err);
        }
    }

    async getTimesheetById(req, res) {
        // Checks if the id is valid
        if (!uuidValidator(req.params.timesheetId)) {
            res.status(404).send({error: 'Invalid timesheet id!'});
            return;
        }

        try {
            const timesheet = await Timesheet.findByPk(req.params.timesheetId);

            if (timesheet) {
                const result = [];

                const element = {};
                const current = timesheet;
                const entries = await current.getTimesheetEntries();

                element.data = current;
                element.entries = entries;

                result.push({timesheet: element});

                res.status(201).send(result);
            } else {
                res
                    .status(404)
                    .send({error: "Timesheet with the given id doesn't exist!"});
            }
        } catch (err) {
            res.status(403).json(err);
        }
    }

    async updateTimesheet(req, res) {
        try {
            const entries = req.body.entries;

            const isSubmitted = req.body.submitted;

            const timesheet = await Timesheet.findByPk(req.params.timesheetId);

            if (timesheet.status === 'Submitted') {
                res.status(403).json({error: 'This timesheet is already submitted!'});
                return;
            }

            if (isSubmitted) {
                timesheet.status = 'Submitted';
                await timesheet.save();
            }

            for (const entry of entries) {
                // if new => entry.id === null
                if (!entry.id) {
                    const newTimesheetEntry = await TimesheetEntry.create({
                        timesheetId: entry.timesheetId,
                        projectId: entry.projectId,
                        taskId: entry.taskId,
                    });
                    if (entry.days) {
                        for (const index in entry.days) {
                            await Day.create({
                                timesheetEntryId: newTimesheetEntry.id,
                                date: entry.days[index].date,
                                hours: entry.days[index].hours,
                            });
                        }
                    }
                    res.send({newTimesheetEntry});
                } else {
                    const updateTimesheetEntry = await TimesheetEntry.findByPk(entry.id);
                    if (entry.projectId !== updateTimesheetEntry.projectId) {
                        updateTimesheetEntry.projectId = entry.projectId;
                    }
                    if (entry.taskId !== updateTimesheetEntry.taskId) {
                        updateTimesheetEntry.taskId = entry.taskId;
                    }
                    await updateTimesheetEntry.save();

                    if (entry.days) {
                        // get current timesheetEntry days and check for id
                        for (const index in entry.days) {
                            if (entry.days[index].id) {
                                const updateDay = await Day.findByPk(entry.days[index].id);
                                // check if stored information is different from req.body.entries.day[index]
                                if (entry.days[index].date !== updateDay.date) {
                                    updateDay.date = entry.days[index].date;
                                }
                                if (entry.days[index].hours !== updateDay.hours) {
                                    updateDay.hours = entry.days[index].hours;
                                }
                                // save changes inside DB
                                await updateDay.save();
                            } else {
                                //  if new day data was added to timesheetEntry (doesn't have id) -> create new day with association
                                await Day.create({
                                    timesheetEntryId: entry.id,
                                    date: entry.days[index].date,
                                    hours: entry.days[index].hours,
                                });
                            }
                        }
                    }
                }
            }

            res.redirect(`/timesheets/${req.params.timesheetId}`);
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
                    userId: getUserId(req),
                },
            });

            let timesheet;

            if (!allTimesheet) {
                timesheet = await Timesheet.create(
                    {
                        status: 'Open',
                        startDate: req.body.startDate,
                        userId: getUserId(req),
                    },
                    {
                        includes: {
                            userId: getUserId(req),
                        },
                    }
                );
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
        // Checks if the id is valid
        if (!uuidValidator(req.params.timesheetId)) {
            res.status(404).send({error: 'Invalid timesheet id!'});
            return;
        }

        try {
            // Finds one by id.
            const timesheet = await Timesheet.findOne({
                where: {
                    id: req.params.id,
                },
            });

            if (timesheet) {
                await Timesheet.destroy({
                    where: {
                        id: timesheet.id,
                    },
                });
                res.status(201).send({success: 'Deleted successfully!'});
            } else {
                res.status(409).json({error: "Timesheet doesn't exist!"});
            }
        } catch (err) {
            res.status(403).json(err);
        }
    }

    async getTimesheetEntryDays(req, res) {
        try {
            const entry = await TimesheetEntry.findByPk(req.params.timesheetEntryId);
            const days = await entry.getDays();
            res.status(200).send({entry, days});
        } catch (err) {
            res.status(500).send({error: err});
        }
    }
}

module.exports = new TimesheetController();
