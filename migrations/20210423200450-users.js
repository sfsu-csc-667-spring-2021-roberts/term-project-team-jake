'use strict';

module.exports = {
  up: async (sequelize, DataTypes) => {
    await sequelize.createTable('users', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: "username"
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: "email"
      },
      password: {
        type: DataTypes.STRING(300),
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  }
};
