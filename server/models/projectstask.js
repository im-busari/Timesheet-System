'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProjectsTask extends Model {
        static associate(models) {

        }
    }

    ProjectsTask.init({
        projectId: {
            type: DataTypes.UUID,
        },
        taskId: {
            type: DataTypes.UUID,
        },
    }, {
        sequelize,
        modelName: 'ProjectsTask',
    });
    return ProjectsTask;
};