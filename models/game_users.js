const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('game_users', {
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {model: 'games', key: 'id'}
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    players: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {model: 'users', key: 'id'}
    }
  }, {
    sequelize,
    tableName: 'game_users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "current_game_pk",
        unique: true,
        fields: [
          { name: "game_id" },
        ]
      },
    ]
  });
};
