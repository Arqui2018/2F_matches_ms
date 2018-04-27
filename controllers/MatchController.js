'use strict';

const { Match } = require('../models');

class MatchController {

  async index(req, res) {
    const matches = await Match.findAll();
    res.json(matches);
  }

  async show(req, res) {
    const match = await Match.findById(req.params.id);
    if (!match) {
      res.sendStatus(400);
    }
    res.json(match);
  }
}

module.exports = new MatchController();
