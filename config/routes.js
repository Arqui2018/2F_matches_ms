const MatchController = require('../controllers/MatchController.js');

module.exports = (app) => {
  app.get('/matches', MatchController.index);
  app.get('/matches/:id', MatchController.show);
};
