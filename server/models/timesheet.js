'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timesheet extends Model {
    static associate(models) {
      this.User = Timesheet.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      Timesheet.hasMany(models.TimesheetEntry, {
        foreignKey: 'timesheetId',
        onDelete: 'cascade',
      });
    }
  }

  Timesheet.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: false,
      },
    },
    {
      sequelize,
      modelName: 'Timesheet',
    }
  );
  return Timesheet;
};
