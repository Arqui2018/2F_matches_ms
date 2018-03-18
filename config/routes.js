
const MatchController = require('../controllers/MatchController.js');
const TeamController = require('../controllers/TeamController.js');
// const { MatchController, TeamController } = require('../controllers/*');

module.exports = (app) => {
  app.get('/matches', MatchController.index);
  app.get('/matches/:id', MatchController.show);
  app.get('/teams', TeamController.index);
  app.get('/teams/:id', TeamController.show);
};
