'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Timesheets', [
      {
        id: 'b99eecc9-7e59-49db-b866-7f46b5bff2ee',
        status: 'Open',
        startDate: '2020-08-12',
        userId: '3f4fa807-d4ff-4bf7-b1da-56dd80c52483',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c7c394df-2d1f-4d1f-85e1-4a58150c5672',
        status: 'Submitted',
        startDate: '2020-08-12',
        userId: '3f4fa807-d4ff-4bf7-b1da-56dd80c52483',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Timesheets', null, {});
  },
};
