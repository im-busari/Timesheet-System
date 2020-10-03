'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Timesheets', [
      {
        id: 'b99eecc9-7e59-49db-b866-7f46b5bff2ee',
        status: 'Open',
        startDate: '30-11-2020',
        userId: '36d3bfd8-44bb-4b6b-8c03-99965ea47645',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c7c394df-2d1f-4d1f-85e1-4a58150c5672',
        status: 'Submitted',
        startDate: '23-11-2020',
        userId: '36d3bfd8-44bb-4b6b-8c03-99965ea47645',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f1eb317f-dfdc-4e27-b6f4-0c495a9a6851',
        status: 'Open',
        startDate: '16-11-2020',
        userId: '786574ab-6b87-4663-8a93-369f8394748a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8547ae8e-4508-4a4d-a5fb-cbf1a0bca5d5',
        status: 'Open',
        startDate: '09-11-2020',
        userId: '36d3bfd8-44bb-4b6b-8c03-99965ea47645',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ce99cea9-1d30-4b35-9aaf-8b65205f4c18',
        status: 'Submitted',
        startDate: '02-11-2020',
        userId: '36d3bfd8-44bb-4b6b-8c03-99965ea47645',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3b08c24e-b2b6-4313-be16-25c60b418418',
        status: 'Open',
        startDate: '12-10-2020',
        userId: '786574ab-6b87-4663-8a93-369f8394748a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9ade077e-40f6-4bd0-98b1-58f49794f311',
        status: 'Open',
        startDate: '26-10-2020',
        userId: '36d3bfd8-44bb-4b6b-8c03-99965ea47645',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5abb7246-4672-45ae-8eb3-37be02019efb',
        status: 'Submitted',
        startDate: '19-10-2020',
        userId: '36d3bfd8-44bb-4b6b-8c03-99965ea47645',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '314f6795-9f02-4023-9ebc-a89197739f1b',
        status: 'Open',
        startDate: '5-10-2020',
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
