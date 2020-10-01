'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('TimesheetEntries', [
      {
        id: 'cae71929-0f6a-41a8-9f5f-4b63c6f7ec7c',
        timesheetId: 'b99eecc9-7e59-49db-b866-7f46b5bff2ee',
        projectId: 'dbce9d09-0b41-4fcc-a39c-5082182d756b', // TODO: REMOVE LATER
        taskId: 'ba97e232-4bbc-4c87-b5d1-d6b96118278f', // TODO: REMOVE LATER
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '261fa10e-583f-4acd-8eb3-3636d3a0c673',
        timesheetId: 'b99eecc9-7e59-49db-b866-7f46b5bff2ee',
        projectId: 'dbce9d09-0b41-4fcc-a39c-5082182d756b', // TODO: REMOVE LATER
        taskId: 'ba97e232-4bbc-4c87-b5d1-d6b96118278f', // TODO: REMOVE LATER
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd5a29223-e4be-4781-95d1-fb2d96cd9bc3',
        timesheetId: 'c7c394df-2d1f-4d1f-85e1-4a58150c5672',
        projectId: 'dbce9d09-0b41-4fcc-a39c-5082182d756b', // TODO: REMOVE LATER
        taskId: 'ba97e232-4bbc-4c87-b5d1-d6b96118278f', // TODO: REMOVE LATER
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('TimesheetEntries', null, {});
  },
};
