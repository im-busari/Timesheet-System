'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Day extends Model {
        static associate(models) {
            this.TimesheetEntry = Day.belongsTo(models.TimesheetEntry, {
                foreignKey: 'timesheetEntryId',
            });
        }
    }

    Day.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        timesheetEntryId: {
            type: DataTypes.UUID,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hours: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: {
                    args: 0.25,
                    msg: 'Hours cannot be less than 15 minutes (0.25) hours!'
                },
                max: {
                    args: 24,
                    msg: 'Hours cannot be more than 24 hours!'
                },
                isNumber: {
                    msg: 'Invalid hours type! Hours must be a number!'
                }
            }
        }
    }, {
        sequelize,
        modelName: 'Day',
    });
    return Day;
};