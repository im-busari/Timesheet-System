'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectsTask extends Model {
    static associate(models) {
      ProjectsTask.belongsTo(models.Project, {
        foreignKey: 'projectId',
      });
      ProjectsTask.belongsTo(models.Task, {
        foreignKey: 'taskId',
      });
    }
  }

  ProjectsTask.init(
    {
      projectId: {
        type: DataTypes.UUID,
      },
      taskId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: 'ProjectsTask',
    }
  );
  return ProjectsTask;
};
