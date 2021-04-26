'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('test_table', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
        allowNull: false
      },
      testString: {
        type:Sequelize.STRING,
        allowNull: false
      }
    });
  },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('test_table');
    }
};