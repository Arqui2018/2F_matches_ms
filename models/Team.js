
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
