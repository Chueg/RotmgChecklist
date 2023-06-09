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
    armor_type: {
    type: DataTypes.STRING,
    allowNull: false,
    }
    
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
