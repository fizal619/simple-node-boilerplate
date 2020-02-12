'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservations', [
      {
        name: 'John Cena',
        slot: new Date(Date.UTC(2020, 1, 21, 17)),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Not John Cena',
        slot: new Date(Date.UTC(2020, 1, 21, 18, 30)),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};
