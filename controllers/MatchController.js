'use strict';

const { Match } = require('../models');

class MatchController {

  async index(req, res) {
    const matches = await Match.findAll();
    res.json(matches);
  }

  async show(req, res) {
    try {
      const match = await Match.findById(req.params.id);
      if (!match) {
        throw (404);        
      }
      res.json(match);
    }
    catch (e) {
      res.sendStatus(e);
    }
  }
}

module.exports = new MatchController();
