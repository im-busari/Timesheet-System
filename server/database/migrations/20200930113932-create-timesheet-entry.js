'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TimesheetEntries', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      timesheetId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Timesheets',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      projectId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Projects',
          },
          key: 'id',
        },
      },
      taskId: {
        type: Sequelize.UUID,
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TimesheetEntries');
  },
};
