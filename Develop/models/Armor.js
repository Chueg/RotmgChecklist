const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Armor extends Model {}

Armor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
    armor_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    armor_type: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id'
    },
    },

    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'armor',
  }
);

module.exports = Armor;
