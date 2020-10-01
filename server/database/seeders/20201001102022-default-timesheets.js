'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Timesheets', [
      {
        id: 'b99eecc9-7e59-49db-b866-7f46b5bff2ee',
        status: 'Open',
        startDate: '2020-08-12',
        userId: '11e299f0-a1dd-4157-aeaf-c3f46233fe73',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c7c394df-2d1f-4d1f-85e1-4a58150c5672',
        status: 'Submitted',
        startDate: '2020-08-12',
        userId: '11e299f0-a1dd-4157-aeaf-c3f46233fe73',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Timesheets', null, {});
  },
};
