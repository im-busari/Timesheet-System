'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.hasMany(models.TimesheetEntry, {
        foreignKey: 'projectId',
      });
      Project.belongsToMany(models.Task, {
        foreignKey: 'projectId',
        as: 'tasks',
        through: 'ProjectsTasks',
      });
    }
  }

  Project.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );
  return Project;
};
