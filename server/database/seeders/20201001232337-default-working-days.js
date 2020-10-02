'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Days', [
      {
        id: '0c527364-8648-4c7e-8838-cafc203cc6b4',
        timesheetEntryId: '261fa10e-583f-4acd-8eb3-3636d3a0c673',
        date: '2020-10-12',
        hours: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e77623aa-0cb2-40f3-b2e5-bbef9ec46169',
        timesheetEntryId: 'cae71929-0f6a-41a8-9f5f-4b63c6f7ec7c',
        date: '2020-10-12',
        hours: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '042f91ab-80c2-472f-b2c1-f1a2cfa92a24',
        timesheetEntryId: '261fa10e-583f-4acd-8eb3-3636d3a0c673',
        date: '2020-10-12',
        hours: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f6226088-3b8c-48f0-99f5-32aaf39df7ed',
        timesheetEntryId: 'cae71929-0f6a-41a8-9f5f-4b63c6f7ec7c',
        date: '2020-10-12',
        hours: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Days', null, {});
  },
};
