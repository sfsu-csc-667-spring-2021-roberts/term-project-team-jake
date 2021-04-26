const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('games', {
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    game_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_of_players: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    action: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'games',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "games_pk",
        unique: true,
        fields: [
          { name: "game_id" },
        ]
      },
    ]
  });
};
