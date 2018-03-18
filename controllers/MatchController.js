
const { Match } = require('../models');

exports.index = async (req, res) => {
  const matches = await Match.findAll();
  res.json(matches);
};

exports.show = async (req, res) => {
  const match = await Match.findOne({ where: { id: req.params.id } });
  res.json(match);
};
