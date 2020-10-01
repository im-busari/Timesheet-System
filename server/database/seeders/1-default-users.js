'use strict';
const bcrypt = require('bcrypt');
const hashPass = bcrypt.hashSync('12345678', 10);

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('Users', [
      {
        id: '36d3bfd8-44bb-4b6b-8c03-99965ea47645',
        username: 'yellow.Teletubbie',
        email: 'yellow.teletubbie@teleY.comt',
        password: `${hashPass}`, //  1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '786574ab-6b87-4663-8a93-369f8394748a',
        username: 'admin.Teletubby',
        email: 'admin.teletubbie@teleY.comt',
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
