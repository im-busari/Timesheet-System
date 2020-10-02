const { TimesheetEntry } = require('../models');

class TimesheetEntryController {
  async getEntryDays(req, res) {
    try {
      const entry = await TimesheetEntry.findByPk(req.params.timesheetEntryId);
      const days = await entry.getDays();
      res.status(200).send({ entry, days });
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }
}

module.exports = new TimesheetEntryController();
