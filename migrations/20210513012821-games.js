'use strict';

module.exports = {
  up: async (sequelize, DataTypes) => {
    await sequelize.createTable('games', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("games");
  }
};
