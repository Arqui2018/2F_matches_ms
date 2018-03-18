
const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
  name: String,
  id: Number,
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
