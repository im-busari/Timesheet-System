'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        static associate(models) {
            Task.hasMany(models.Project, {
                foreignKey: 'taskId',
                through: 'ProjectsTasks',
            });
        }
    }

    Task.init(
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
            projectId: {
                type: DataTypes.UUID,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Task',
        }
    );
    return Task;
};
