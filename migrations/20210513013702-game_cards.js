'use strict';

module.exports = {
  up: async (sequelize, DataTypes) => {
    await sequelize.createTable('game_cards', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("game_cards");
  }
};
