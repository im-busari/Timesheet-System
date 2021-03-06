const { Timesheet, TimesheetEntry, Day } = require('../models');
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

        for (const timesheet in timesheets) {
          const entries = [];
          const element = {};
          const current = timesheets[timesheet];
          const entriesResult = await current.getTimesheetEntries();

          for (const index in entriesResult) {
            const entryFromDB = await TimesheetEntry.findByPk(
              entriesResult[index].id
            );
            const daysForEntry = await entryFromDB.getDays();
            entries.push({ data: entriesResult[index], days: daysForEntry });
          }

          element.data = current;
          element.entries = entries;

          result.push({ timesheet: element });
        }

        res.status(201).send(result);
      } else {
        res
          .status(404)
          .send({ error: "The user doesn't have any timesheets!" });
      }
    } catch (err) {
      res.status(403).json(err);
    }
  }

  async getTimesheetById(req, res) {
    // Checks if the id is valid
    if (!uuidValidator(req.params.timesheetId)) {
      res.status(404).send({ error: 'Invalid timesheet id!' });
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

        result.push({ timesheet: element });

        res.status(201).send(result);
      } else {
        res
          .status(404)
          .send({ error: "Timesheet with the given id doesn't exist!" });
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

      console.log('Outside: ', entries);

      if (timesheet.status === 'Submitted') {
        console.log('marked as submitted');
        res.status(403).json({ error: 'This timesheet is already submitted!' });
        return;
      }

      if (isSubmitted) {
        timesheet.status = 'Submitted';
        await timesheet.save();
      }

      for (const entry in entries) {
        console.log(entries[entry]);
        // if new => entry.id === null
        if (!entries[entry].data.id) {
          const newTimesheetEntry = await TimesheetEntry.create({
            timesheetId: req.params.timesheetId,
            projectId: entries[entry].data.projectId,
            taskId: entries[entry].data.taskId,
          });

          // console.log(newTimesheetEntry);
          if (entries[entry].days) {
            for (const index in entries[entry].days) {
              if (
                entries[entry].days[index].hours > 0.25 &&
                entries[entry].days[index].hours <= 24
              ) {
                await Day.create({
                  timesheetEntryId: newTimesheetEntry.id,
                  date: entries[entry].days[index].date,
                  hours: entries[entry].days[index].hours,
                });
              }
            }
          }
        } else {
          const updateTimesheetEntry = await TimesheetEntry.findByPk(
            entries[entry].data.id
          );
          if (
            entries[entry].data.projectId !== updateTimesheetEntry.projectId
          ) {
            updateTimesheetEntry.projectId = entries[entry].data.projectId;
          }
          if (entries[entry].data.taskId !== updateTimesheetEntry.taskId) {
            updateTimesheetEntry.taskId = entries[entry].data.taskId;
          }
          await updateTimesheetEntry.save();

          if (entries[entry].days) {
            // get current timesheetEntry days and check for id
            for (const index in entries[entry].days) {
              if (entries[entry].days[index].id) {
                const updateDay = await Day.findByPk(
                  entries[entry].days[index].id
                );
                // check if stored information is different from req.body.entries.day[index]
                if (entries[entry].days[index].date !== updateDay.date) {
                  updateDay.date = entries[entry].days[index].date;
                }
                if (
                  !entries[entry].days[index].hours ||
                  entries[entry].days[index].hours < 0.25
                ) {
                  await Day.destroy({
                    where: {
                      id: updateDay.id,
                    },
                  });
                  continue;
                }
                if (entries[entry].days[index].hours !== updateDay.hours) {
                  updateDay.hours = entries[entry].days[index].hours;
                }
                // save changes inside DB
                await updateDay.save();
              } else {
                //  if new day data was added to timesheetEntry (doesn't have id) -> create new day with association
                await Day.create({
                  timesheetEntryId: entries[entry].data.id,
                  date: entries[entry].days[index].date,
                  hours: entries[entry].days[index].hours,
                });
              }
            }
          }
        }
      }

      res.send({ success: true });
    } catch (err) {
      console.log(err);
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
        res.status(409).send({ error: 'Already created!' });
      }
    } catch (err) {
      res.status(403).json(err);
    }
  }

  async deleteTimesheet(req, res) {
    // Checks if the id is valid
    if (!uuidValidator(req.params.timesheetId)) {
      res.status(404).send({ error: 'Invalid timesheet id!' });
      return;
    }

    try {
      // Finds one by id.
      const timesheet = await Timesheet.findByPk(req.params.timesheetId);

      if (timesheet) {
        await Timesheet.destroy({
          where: {
            id: timesheet.id,
          },
        });
        res.status(201).send({ success: 'Deleted successfully!' });
      } else {
        res.status(409).json({ error: "Timesheet doesn't exist!" });
      }
    } catch (err) {
      res.status(403).json(err);
    }
  }

  async getTimesheetEntryDays(req, res) {
    try {
      const entry = await TimesheetEntry.findByPk(req.params.timesheetEntryId);
      const days = await entry.getDays();
      res.status(200).send({ entry, days });
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }

  async deleteTimesheetEntry(req, res) {
    try {
      const entry = await TimesheetEntry.findByPk(req.params.timesheetEntryId);

      console.log(entry);
      if (entry) {
        await TimesheetEntry.destroy({
          where: {
            id: entry.id,
          },
        });

        res.status(200).send({ success: 'Deleted successfully!' });
      } else {
        res.status(409).json({ error: "Timesheet doesn't exist!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err });
    }
  }
}

module.exports = new TimesheetController();
