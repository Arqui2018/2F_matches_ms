'use strict';

const Team = require('../models/Team.js');

const mongoose = require('mongoose');
const PORT_MONGO = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/test';
mongoose.connect(PORT_MONGO);

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const allTeams = [];
    allTeams.push(new Team({ name: 'Rusia', id: 1 }));
    allTeams.push(new Team({ name: 'Arabia Saudita', id: 2 }));
    allTeams.push(new Team({ name: 'Egipto', id: 3 }));
    allTeams.push(new Team({ name: 'Uruguay', id: 4 }));
    allTeams.push(new Team({ name: 'Marruecos', id: 5 }));
    allTeams.push(new Team({ name: 'Irán', id: 6 }));
    allTeams.push(new Team({ name: 'Portugal', id: 7 }));
    allTeams.push(new Team({ name: 'España', id: 8 }));
    allTeams.push(new Team({ name: 'Francia', id: 9 }));
    allTeams.push(new Team({ name: 'Australia', id: 10 }));
    allTeams.push(new Team({ name: 'Argentina', id: 11 }));
    allTeams.push(new Team({ name: 'Islandia', id: 12 }));
    allTeams.push(new Team({ name: 'Perú', id: 13 }));
    allTeams.push(new Team({ name: 'Dinamarca', id: 14 }));
    allTeams.push(new Team({ name: 'Croacia', id: 15 }));
    allTeams.push(new Team({ name: 'Nigeria', id: 16 }));
    allTeams.push(new Team({ name: 'Costa Rica', id: 17 }));
    allTeams.push(new Team({ name: 'Serbia', id: 18 }));
    allTeams.push(new Team({ name: 'Alemania', id: 19 }));
    allTeams.push(new Team({ name: 'México', id: 20 }));
    allTeams.push(new Team({ name: 'Brasil', id: 21 }));
    allTeams.push(new Team({ name: 'Suiza', id: 22 }));
    allTeams.push(new Team({ name: 'Suecia', id: 23 }));
    allTeams.push(new Team({ name: 'República de Corea', id: 24 }));
    allTeams.push(new Team({ name: 'Bélgica', id: 25 }));
    allTeams.push(new Team({ name: 'Panamá', id: 26 }));
    allTeams.push(new Team({ name: 'Túnez', id: 27 }));
    allTeams.push(new Team({ name: 'Inglaterra', id: 28 }));
    allTeams.push(new Team({ name: 'Colombia', id: 29 }));
    allTeams.push(new Team({ name: 'Japón', id: 30 }));
    allTeams.push(new Team({ name: 'Polonia', id: 31 }));
    allTeams.push(new Team({ name: 'Senegal', id: 32 }));
    for (const item of allTeams)
      await item.save();


    return queryInterface.bulkInsert('Matches', [
      {
        id: 1,
        team_local_id: 1,
        team_visitor_id: 2,
        date: new Date(2018, 5, 14, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        team_local_id: 3,
        team_visitor_id: 4,
        date: new Date(2018, 5, 15, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        team_local_id: 5,
        team_visitor_id: 6,
        date: new Date(2018, 5, 15, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        team_local_id: 7,
        team_visitor_id: 8,
        date: new Date(2018, 5, 15, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        team_local_id: 9,
        team_visitor_id: 10,
        date: new Date(2018, 5, 16, 5),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        team_local_id: 11,
        team_visitor_id: 12,
        date: new Date(2018, 5, 16, 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        team_local_id: 13,
        team_visitor_id: 14,
        date: new Date(2018, 5, 16, 11),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        team_local_id: 15,
        team_visitor_id: 16,
        date: new Date(2018, 5, 16, 14),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        team_local_id: 17,
        team_visitor_id: 18,
        date: new Date(2018, 5, 17, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        team_local_id: 19,
        team_visitor_id: 20,
        date: new Date(2018, 5, 17, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        team_local_id: 21,
        team_visitor_id: 22,
        date: new Date(2018, 5, 17, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        team_local_id: 23,
        team_visitor_id: 24,
        date: new Date(2018, 5, 18, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        team_local_id: 25,
        team_visitor_id: 26,
        date: new Date(2018, 5, 18, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        team_local_id: 27,
        team_visitor_id: 28,
        date: new Date(2018, 5, 18, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        team_local_id: 29,
        team_visitor_id: 30,
        date: new Date(2018, 5, 19, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        team_local_id: 31,
        team_visitor_id: 32,
        date: new Date(2018, 5, 19, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        team_local_id: 1,
        team_visitor_id: 3,
        date: new Date(2018, 5, 19, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        team_local_id: 7,
        team_visitor_id: 5,
        date: new Date(2018, 5, 20, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        team_local_id: 4,
        team_visitor_id: 2,
        date: new Date(2018, 5, 20, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        team_local_id: 6,
        team_visitor_id: 8,
        date: new Date(2018, 5, 20, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 21,
        team_local_id: 14,
        team_visitor_id: 10,
        date: new Date(2018, 5, 21, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 22,
        team_local_id: 9,
        team_visitor_id: 13,
        date: new Date(2018, 5, 21, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 23,
        team_local_id: 11,
        team_visitor_id: 15,
        date: new Date(2018, 5, 21, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 24,
        team_local_id: 21,
        team_visitor_id: 17,
        date: new Date(2018, 5, 22, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 25,
        team_local_id: 16,
        team_visitor_id: 12,
        date: new Date(2018, 5, 22, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 26,
        team_local_id: 18,
        team_visitor_id: 22,
        date: new Date(2018, 5, 22, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 27,
        team_local_id: 25,
        team_visitor_id: 27,
        date: new Date(2018, 5, 23, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 28,
        team_local_id: 24,
        team_visitor_id: 20,
        date: new Date(2018, 5, 23, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 29,
        team_local_id: 19,
        team_visitor_id: 23,
        date: new Date(2018, 5, 23, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 30,
        team_local_id: 28,
        team_visitor_id: 26,
        date: new Date(2018, 5, 24, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 31,
        team_local_id: 30,
        team_visitor_id: 32,
        date: new Date(2018, 5, 24, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 32,
        team_local_id: 31,
        team_visitor_id: 29,
        date: new Date(2018, 5, 24, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 33,
        team_local_id: 4,
        team_visitor_id: 1,
        date: new Date(2018, 5, 25, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 34,
        team_local_id: 2,
        team_visitor_id: 3,
        date: new Date(2018, 5, 25, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 35,
        team_local_id: 6,
        team_visitor_id: 7,
        date: new Date(2018, 5, 25, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 36,
        team_local_id: 8,
        team_visitor_id: 5,
        date: new Date(2018, 5, 25, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 37,
        team_local_id: 14,
        team_visitor_id: 9,
        date: new Date(2018, 5, 26, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 38,
        team_local_id: 10,
        team_visitor_id: 13,
        date: new Date(2018, 5, 26, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 39,
        team_local_id: 16,
        team_visitor_id: 11,
        date: new Date(2018, 5, 26, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 40,
        team_local_id: 12,
        team_visitor_id: 15,
        date: new Date(2018, 5, 26, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 41,
        team_local_id: 20,
        team_visitor_id: 23,
        date: new Date(2018, 5, 27, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 42,
        team_local_id: 24,
        team_visitor_id: 19,
        date: new Date(2018, 5, 27, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 43,
        team_local_id: 24,
        team_visitor_id: 19,
        date: new Date(2018, 5, 27, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 44,
        team_local_id: 18,
        team_visitor_id: 21,
        date: new Date(2018, 5, 27, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 45,
        team_local_id: 22,
        team_visitor_id: 17,
        date: new Date(2018, 5, 27, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 46,
        team_local_id: 30,
        team_visitor_id: 31,
        date: new Date(2018, 5, 28, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 47,
        team_local_id: 32,
        team_visitor_id: 29,
        date: new Date(2018, 5, 28, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 48,
        team_local_id: 26,
        team_visitor_id: 27,
        date: new Date(2018, 5, 28, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 49,
        team_local_id: 28,
        team_visitor_id: 25,
        date: new Date(2018, 5, 28, 13),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
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
