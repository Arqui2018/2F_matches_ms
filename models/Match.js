'use strict';

module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    team_local_id: DataTypes.STRING,
    team_visitor_id: DataTypes.STRING,
    goals_local: DataTypes.INTEGER,
    goals_visitor: DataTypes.INTEGER,
    date: DataTypes.DATE,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {});
  Match.associate = models => {
    // associations can be defined here
  };
  return Match;
};
