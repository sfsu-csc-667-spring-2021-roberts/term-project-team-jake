const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cards', {
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
  }, {
    sequelize,
    tableName: 'cards',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cards_pk",
        unique: true,
        fields: [
          { name: "card_id" },
        ]
      },
    ]
  });
};
