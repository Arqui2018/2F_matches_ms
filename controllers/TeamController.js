
const { Team } = require('../models');

exports.index = async (req, res) => {
  const teams = await Team.findAll();
  res.json(teams);
};

exports.show = async (req, res) => {
  const team = await Team.findOne({ where: { id: req.params.id } });
  if (!team) {
    res.sendStatus(400);
  }
  res.json(team);
};
