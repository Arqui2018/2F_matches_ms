'use strict';

const Team = require('../models/Team.js');

class TeamController {

  async index(req, res) {
    const teams = await Team.find();
    res.json(teams);
  }

  async show(req, res) {
    const team = await Team.findOne({ id: req.params.id });
    if (!team) {
      res.sendStatus(400);
    }
    res.json(team);
  }
}

module.exports = new TeamController();
