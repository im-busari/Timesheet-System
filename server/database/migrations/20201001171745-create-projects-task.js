'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProjectsTasks', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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
        references: {
          model: {
            tableName: 'Tasks',
          },
          key: 'id',
        },
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
  down: async (queryInterface) => {
    await queryInterface.dropTable('ProjectsTasks');
  },
};
