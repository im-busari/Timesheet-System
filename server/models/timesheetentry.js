'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimesheetEntry extends Model {
    static associate(models) {}
  }

  TimesheetEntry.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      timesheetId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      projectId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      taskId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'TimesheetEntry',
    }
  );
  return TimesheetEntry;
};
