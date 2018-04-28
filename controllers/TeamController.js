'use strict';

const Team = require('../models/Team.js');

class TeamController {

  async index(req, res) {
    const teams = await Team.find();
    res.json(teams);
  }

  async show(req, res, next) {
    try {
      const team = await Team.findOne({ id: req.params.id });
      if (!team) {
        throw (404);
      }
      res.json(team);
    }
    catch (e) {
      res.sendStatus(e);
    }
  }
}

module.exports = new TeamController();
