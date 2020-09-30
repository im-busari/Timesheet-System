'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TimesheetEntry extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    TimesheetEntry.init({
        timesheetId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        projectId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        taskId: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'TimesheetEntry',
    });
    return TimesheetEntry;
};