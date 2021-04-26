const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "email",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "username",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "users_pk",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
