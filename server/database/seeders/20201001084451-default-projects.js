'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Projects', [
      {
        id: 'dbce9d09-0b41-4fcc-a39c-5082182d756b',
        name: 'MentorMate L&D: 2020.2.DevCamp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '18e31e6e-c654-4673-afc8-d44194649639',
        name:
          'MentorMate L&D: Client Satisfaction & Communication Part 1 Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '569a1344-59a7-4645-aae1-08c12636f71f',
        name:
          'MentorMate L&D: Client Satisfaction & Communication Part 2 Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '117d796f-fa2d-45de-810d-f4a5cd9e856c',
        name: 'MentorMate L&D: Giving & Receiving Feedback Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0f153440-ef84-484f-b3a7-5453533d9f60',
        name: 'MentorMate L&D: Interviewing Skills Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ec2b5911-2f63-4813-88f7-fa6f165f0b98',
        name: 'MentorMate L&D: Mentoring Skills Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b63b3407-340f-4cc1-a4f6-ea113616d1f2',
        name: 'MentorMate L&D: Presentation Skills Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '08e68084-2042-4f69-9a03-5b45a7a75412',
        name: 'MentorMate L&D: Scrum Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'db6b5021-5c56-4e73-8dc7-b14d4231be16',
        name: 'MentorMate L&D: Tasks Delegation Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9d91178c-d8ab-4de1-83c2-6ff71f6d9a81',
        name: 'MentorMate L&D: User Stories & Design Analysis Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: '14a76abd-3356-4c4f-9398-7180c5344afb',
        name: 'MentorMate: Internal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '07b08947-28a4-45ab-8f20-c510b9f49f94',
        name: 'MentorMate: Time Off',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Projects', null, {});
  },
};
