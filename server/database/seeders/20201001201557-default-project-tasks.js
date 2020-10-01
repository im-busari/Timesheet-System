'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('ProjectsTasks', [
      // 2020.2 DevCamp tasks
      {
        id: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        projectId: 'dbce9d09-0b41-4fcc-a39c-5082182d756b',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6ee04f8d-7d1d-453a-9e04-80750524760f',
        projectId: 'dbce9d09-0b41-4fcc-a39c-5082182d756b',
        taskId: 'f1c6a6dd-979a-4b22-acff-d8aacb30427a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Client Satisfaction Communication 1
      {
        id: '1c8a361c-f323-4793-96fb-b710ae17efbc',
        projectId: '18e31e6e-c654-4673-afc8-d44194649639',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Client Satisfaction Communication 2
      {
        id: '32a43e9b-c0e4-4e47-a749-f635644fd055',
        projectId: '569a1344-59a7-4645-aae1-08c12636f71f',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Feedback Training
      {
        id: '29973c71-b278-48c6-962a-c5b1a50160dc',
        projectId: '117d796f-fa2d-45de-810d-f4a5cd9e856c',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Interviewing Skills Training
      {
        id: 'ba7d265c-ebeb-435a-8d8f-3f82393ccb83',
        projectId: '0f153440-ef84-484f-b3a7-5453533d9f60',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Mentoring Skills Training
      {
        id: 'b53c1ec9-8804-4b71-b49b-26a16aeb8326',
        projectId: 'ec2b5911-2f63-4813-88f7-fa6f165f0b98',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Presentation Skills Training
      {
        id: 'abd3ad61-884c-4174-a092-cf812700c512',
        projectId: 'b63b3407-340f-4cc1-a4f6-ea113616d1f2',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Scrum Training
      {
        id: 'fba20a2b-90d6-44d3-842b-01ff29487b53',
        projectId: '08e68084-2042-4f69-9a03-5b45a7a75412',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tasks Delegation Training
      {
        id: '10861589-eba3-494c-b8ef-6d6a5cd0de67',
        projectId: 'db6b5021-5c56-4e73-8dc7-b14d4231be16',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // User Stories & Design Analysis Training
      {
        id: '4bd921ad-8c22-420e-b75d-d02237b1bac0',
        projectId: '9d91178c-d8ab-4de1-83c2-6ff71f6d9a81',
        taskId: 'c022d469-ef4b-478e-9dbd-2ab8cc3e1239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Internal
      {
        id: '902f718d-e435-464b-94ad-6f8d77b0b4f7',
        projectId: '14a76abd-3356-4c4f-9398-7180c5344afb',
        taskId: '93f855b4-1dbd-46fd-a711-b6775deb9e8c',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'aca9a083-6826-489d-b333-cffb0b8e40ac',
        projectId: '14a76abd-3356-4c4f-9398-7180c5344afb',
        taskId: 'f1c6a6dd-979a-4b22-acff-d8aacb30427a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9a82443a-b0b5-4b1e-83f1-5da9243b5065',
        projectId: '14a76abd-3356-4c4f-9398-7180c5344afb',
        taskId: '28e0c84a-aae3-4a35-b03d-ab3b3eef0405',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'eb1120e3-c69a-4979-9a3b-4831f659f0ed',
        projectId: '14a76abd-3356-4c4f-9398-7180c5344afb',
        taskId: '61ef13c9-214a-4b32-9506-3f1333c98230',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0f083a45-5d65-458c-a703-7abc216b7e62',
        projectId: '14a76abd-3356-4c4f-9398-7180c5344afb',
        taskId: '789dddde-7141-40f1-8cb7-bc56c9e66f64',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '02875a4d-2af9-4b8c-9b8d-f24e0e604f45',
        projectId: '14a76abd-3356-4c4f-9398-7180c5344afb',
        taskId: '4528424a-e302-4853-87d9-1c2ecd6aa4c2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '59b83665-3da1-441f-9d33-53ea7f26047d',
        projectId: '14a76abd-3356-4c4f-9398-7180c5344afb',
        taskId: 'ee45dc49-0097-46e4-bf72-3fce37d2e274',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4c3f1114-f4ae-4381-a726-403c82f654f7',
        projectId: '14a76abd-3356-4c4f-9398-7180c5344afb',
        taskId: 'cd8a9fe2-fbf4-4535-8ebb-17a6c7c446e0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8b5ea0de-e173-4c77-a5c0-48b5b91c9d1f',
        projectId: '14a76abd-3356-4c4f-9398-7180c5344afb',
        taskId: '0ecea95d-58b0-46a5-a197-8528956b7715',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Time Off
      {
        id: '56eb314e-be52-43ab-ad1d-ed37dd686a39',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: '1893f4a7-b983-47b0-ae70-73296d05bccd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9a760681-dc64-43ca-aa2b-8f0c6bd0aaa2',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: '5b7940d4-67fc-463d-8fbc-f1d2acaee6ef',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7ca67541-6307-4f5d-a951-3377189a5628',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: '5267c9fe-bb24-42d2-9478-07e0be33cc3c',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '39d5894f-3ce1-40c9-abab-98271179efc7',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: 'c146e0e8-5cd6-4e63-ac4a-8ee753ac67b9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'dabbdb28-ca49-4302-a69a-a432fa1fc8e2',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: '4001e60f-6059-471c-9464-363a7da3ecc0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0d90561d-d6b2-487b-8a9f-5fff838a8666',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: '066134b5-0c29-46f1-81e0-f21060d7c384',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '404fb0d8-5278-4a73-b97a-3eb5529ac451',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: '066134b5-0c29-46f1-81e0-f21060d7c384',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4c0c0eb7-6e54-473c-a200-7ae6813a362b',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: '6506e9b1-91fb-4b72-9445-32e736f6e997',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '126a9a4e-8a10-4d2b-bacd-1345dfcab921',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: 'c8d5ad4e-2e74-46cd-8cf8-36692b6b73e5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '73ee5ef2-89fb-4eef-a44b-4cddabab2d65',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: '51bc39cb-754e-4d60-8298-1262d7df3dfd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '88dd3d39-f96a-4389-a1e8-e68e69d11198',
        projectId: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        taskId: 'f1731cc9-e897-4c27-83b8-db2ec1542507',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('ProjectsTasks', null, {});
  },
};
