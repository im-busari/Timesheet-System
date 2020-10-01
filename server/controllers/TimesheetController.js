const { Timesheet } = require('../models');
const uuidValidator = require('../utils/validateUuid');

class TimesheetController {
  async getTimesheetsByUserId(req, res) {
    // Checks if the id is valid
    if (!uuidValidator(req.params.userId)) {
      res.status(404).send({ error: 'Invalid user id!' });
      return;
    }

    try {
      const timesheets = await Timesheet.findAll({
        where: {
          userId: req.params.userId,
        },
      });

      if (timesheets.length !== 0) {
        res.status(201).send(timesheets);
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
    if (!uuidValidator(req.params.id)) {
      res.status(404).send({ error: 'Invalid timesheet id!' });
      return;
    }

    try {
      const timesheet = await Timesheet.findByPk(req.params.id);

      if (timesheet) {
        const entries = await timesheet.getTimesheetEntries();
        res.status(200).send({
          data: {
            timesheet,
            entries: entries,
          },
        });
        res.status(201).send(timesheet);
      } else {
        res
          .status(404)
          .send({ error: "Timesheet with the given id doesn't exist!" });
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
        },
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
        res.status(409).send({ error: 'Already created!' });
      }
    } catch (err) {
      res.status(403).json(err);
    }
  }

  async updateTimesheetEntry(req, res) {
    try {
      // ...
      await (1 + 1);
    } catch (err) {
      res.status(409).send({ error: 'Already created!' });
    }
  }

  async deleteTimesheet(req, res) {
    try {
      // Finds one by user id and start date.
      const timesheet = await Timesheet.findOne({
        where: {
          startDate: req.body.startDate,
          userId: req.body.userId,
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
}

module.exports = new TimesheetController();
