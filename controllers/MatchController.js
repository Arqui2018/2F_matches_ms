
const { Match } = require('../models');

exports.index = async (req, res) => {
  const matches = await Match.findAll();
  res.json(matches);
};

exports.show = async (req, res) => {
  const match = await Match.findById(req.params.id);
  if (!match) {
    res.sendStatus(400);
  }
  res.json(match);
};
