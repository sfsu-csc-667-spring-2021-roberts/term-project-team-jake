'use strict';

module.exports = {
  up: async (sequelize, DataTypes) => {
    await sequelize.createTable('cards', {
      card_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      color: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cards");
  }
};
