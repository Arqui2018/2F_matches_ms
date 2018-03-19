'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teams', [
      {
        name: 'Rusia',
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Arabia Saudita',
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Egipto',
        id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Uruguay',
        id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Marruecos',
        id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Irán',
        id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Portugal',
        id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'España',
        id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Francia',
        id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Australia',
        id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Argentina',
        id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Islandia',
        id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Perú',
        id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Dinamarca',
        id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Croacia',
        id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Nigeria',
        id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Costa Rica',
        id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Serbia',
        id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Alemania',
        id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'México',
        id: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Brasil',
        id: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Suiza',
        id: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Suecia',
        id: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'República de Corea',
        id: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Bélgica',
        id: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Panamá',
        id: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Túnez',
        id: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Inglaterra',
        id: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Colombia',
        id: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Japón',
        id: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Polonia',
        id: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Senegal',
        id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
