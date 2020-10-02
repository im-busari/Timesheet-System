'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Days', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            timesheetEntryId: {
                type: Sequelize.UUID,
                references: {
                    model: {
                        tableName: 'TimesheetEntries',
                    },
                    key: 'id',
                },
            },
            date: {
                type: Sequelize.STRING
            },
            hours: {
                type: Sequelize.INTEGER,
                validate: {
                    min: {
                        arguments: 0.25,
                        message: 'Hours cannot be less than 15 minutes (0.25) hours!'
                    },
                    max: {
                        arguments: 24,
                        message: 'Hours cannot be more than 24 hours!'
                    },
                    isNumber: {
                        message: 'Invalid hours type! Hours must be a number!'
                    }
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Days');
    }
};