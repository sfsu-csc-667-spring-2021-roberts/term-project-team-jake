const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('game_cards', {
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discarded: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deck: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'game_cards',
    schema: 'public',
    timestamps: false
  });
};
