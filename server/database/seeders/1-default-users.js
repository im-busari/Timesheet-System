'use strict';
const bcrypt = require('bcrypt');
const hashPass = bcrypt.hashSync('12345678', 10);

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Users', [
      {
        id: '36d3bfd8-44bb-4b6b-8c03-99965ea47645',
        username: 'yellow.teletubby',
        email: 'yellow.teletubby@tele.tub',
        password: `${hashPass}`, //  1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '786574ab-6b87-4663-8a93-369f8394748a',
        username: 'green.teletubby',
        email: 'green.teletubby@tele.tub',
        password: `${hashPass}`, //  1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ab6e3d1a-ffb9-4452-8492-2aa715bb46d2',
        username: 'red.teletubby',
        email: 'red.teletubby@tele.tub',
        password: `${hashPass}`, //  1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '09df8758-d289-41ac-bc88-76430557a12b',
        username: 'purple.teletubby',
        email: 'purple.teletubby@tele.tub',
        password: `${hashPass}`, //  1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('Users', null, {});
  },
};
