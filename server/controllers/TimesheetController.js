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
          const element = {};
          const current = timesheets[timesheet];
          const entries = await current.getTimesheetEntries();

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
      console.log('start update');

      const timesheet = await Timesheet.findByPk(req.params.timesheetId);

      console.log('loop through entries');

      const entries = req.body.entries;
      // console.log(`Number of entries: ${numOfEntries}`);

      for (const entry of entries) {
        // if new => entry.id === null
        if (!entry.id) {
          const newTimesheetEntry = await TimesheetEntry.create({
            timesheetId: entry.timesheetId,
            projectId: entry.projectId,
            taskId: entry.taskId,
          });
          console.log(newTimesheetEntry.id);
          const days = [];
          if (entry.days) {
            for (const workDay in entry.days) {
              const newDay = await Day.create({
                timesheetEntryId: newTimesheetEntry.id,
                date: entry.days[workDay].date,
                hours: entry.days[workDay].hours,
              });
              days.push(newDay);
            }
          }
          res.send({ newTimesheetEntry, days });
        } else {
          const updateTimesheetEntry = await TimesheetEntry.create(
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
        //  if entry.id === sth;
      }

      const timesheetEntry = await TimesheetEntry.findByPk(
        'cae71929-0f6a-41a8-9f5f-4b63c6f7ec7c'
      );

      // await timesheet.setTimehseetEntries(timesheetEntry);

      // console.log({
      //   entry: timesheetEntry,
      //   entries: await timesheet.getTimesheetEntries(),
      // });
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
}

module.exports = new TimesheetController();
