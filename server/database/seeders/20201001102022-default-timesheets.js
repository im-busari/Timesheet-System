'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Timesheets', [
      {
        id: 'b99eecc9-7e59-49db-b866-7f46b5bff2ee',
        status: 'Open',
        startDate: '2020-10-12',
        userId: '36d3bfd8-44bb-4b6b-8c03-99965ea47645',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c7c394df-2d1f-4d1f-85e1-4a58150c5672',
        status: 'Submitted',
        startDate: '2020-10-12',
        userId: '36d3bfd8-44bb-4b6b-8c03-99965ea47645',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f1eb317f-dfdc-4e27-b6f4-0c495a9a6851',
        status: 'Open',
        startDate: '2020-10-12',
        userId: '786574ab-6b87-4663-8a93-369f8394748a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Timesheets', null, {});
  },
};
