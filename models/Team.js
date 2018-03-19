'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Team', {
    name: DataTypes.STRING
  }, {});
  Team.associate = models => {
    // associations can be defined here
  };
  return Team;
};
