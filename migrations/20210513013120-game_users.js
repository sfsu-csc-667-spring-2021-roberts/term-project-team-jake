'use strict';

module.exports = {
  up: async (sequelize, DataTypes) => {
    await sequelize.createTable('game_users', {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {model: 'games', key: 'id'}
      },
      players: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {model: 'users', key: 'id'}
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("game_users");
  }
};
