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
      {
        id: '93f855b4-1dbd-46fd-a711-b6775deb9e8c',
        name: 'Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '28e0c84a-aae3-4a35-b03d-ab3b3eef0405',
        name: 'Research/Process Improvement',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '61ef13c9-214a-4b32-9506-3f1333c98230',
        name: 'Sales & Prospecting',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '789dddde-7141-40f1-8cb7-bc56c9e66f64',
        name: 'Bench Time',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4528424a-e302-4853-87d9-1c2ecd6aa4c2',
        name: 'Hiring/Recruitment',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ee45dc49-0097-46e4-bf72-3fce37d2e274',
        name: 'QMS Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cd8a9fe2-fbf4-4535-8ebb-17a6c7c446e0',
        name: 'Brand Awareness',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0ecea95d-58b0-46a5-a197-8528956b7715',
        name: 'MentorMate Meetings',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1893f4a7-b983-47b0-ae70-73296d05bccd',
        name: 'PTO - Standard Time Off',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5b7940d4-67fc-463d-8fbc-f1d2acaee6ef',
        name: 'Company Holiday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5267c9fe-bb24-42d2-9478-07e0be33cc3c',
        name: 'PTO - Jury Duty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c146e0e8-5cd6-4e63-ac4a-8ee753ac67b9',
        name: 'PTO - FMLA (US Only)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4001e60f-6059-471c-9464-363a7da3ecc0',
        name: 'PTO - Sick Leave (BG Only)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '066134b5-0c29-46f1-81e0-f21060d7c384',
        name: 'UPTO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6506e9b1-91fb-4b72-9445-32e736f6e997',
        name: 'PTO - Rollover',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c8d5ad4e-2e74-46cd-8cf8-36692b6b73e5',
        name: 'PTO - Bereavement',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '51bc39cb-754e-4d60-8298-1262d7df3dfd',
        name: 'PTO - BG Maternity/Paternity Leave',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f1731cc9-e897-4c27-83b8-db2ec1542507',
        name: 'PTO - Marriage (BG Only)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Tasks', null, {});
  },
};
