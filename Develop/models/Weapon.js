const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Weapon extends Model {}

Weapon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
  Weapon_name: {
    type: DataTypes.STRING,
    allowNull: false,
    default: 'minge',
}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'weapon',
  }
);

module.exports = Weapon;
