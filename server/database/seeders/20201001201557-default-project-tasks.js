'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('ProjectsTasks', [
      {
        id: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        projectId: 'dbce9d09-0b41-4fcc-a39c-5082182d756b',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6ee04f8d-7d1d-453a-9e04-80750524760f',
        projectId: '18e31e6e-c654-4673-afc8-d44194649639',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('ProjectsTasks', null, {});
  },
};
