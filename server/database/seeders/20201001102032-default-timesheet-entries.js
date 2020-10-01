'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('TimesheetEntries', [
      {
        id: 'cae71929-0f6a-41a8-9f5f-4b63c6f7ec7c',
        timesheetId: 'b99eecc9-7e59-49db-b866-7f46b5bff2ee',
        projectId: 'b63b3407-340f-4cc1-a4f6-ea113616d1f2',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '261fa10e-583f-4acd-8eb3-3636d3a0c673',
        timesheetId: 'b99eecc9-7e59-49db-b866-7f46b5bff2ee',
        projectId: '9d91178c-d8ab-4de1-83c2-6ff71f6d9a81',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd5a29223-e4be-4781-95d1-fb2d96cd9bc3',
        timesheetId: 'c7c394df-2d1f-4d1f-85e1-4a58150c5672',
        projectId: '08e68084-2042-4f69-9a03-5b45a7a75412',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('TimesheetEntries', null, {});
  },
};
