
const Team = require('../models/Team.js');

exports.index = async (req, res) => {
  const teams = await Team.find({});
  res.json(teams);
};

exports.show = async (req, res) => {
  const team = await Team.findOne({ id: req.params.id });
  res.json(team);
};
