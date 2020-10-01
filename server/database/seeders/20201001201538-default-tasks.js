'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Tasks', [
      {
        id: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        name: 'Learning',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f1c6a6dd-979a-4b22-acff-d8aacb30427a',
        name: 'Administrative',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Tasks', null, {});
  },
};
