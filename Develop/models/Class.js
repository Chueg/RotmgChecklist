const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Class extends Model {}

Class.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
    class_name: {
    type: DataTypes.STRING,
    allowNull: false,
    },


    weapon_type: {
      type: DataTypes.STRING,
      allowNull: false,
      },

      armor_type: {
        type: DataTypes.CHAR,
        allowNull: false,
        },

      ability_type: {
        type: DataTypes.STRING,
        allowNull: false,
        },
      
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'class',
  }
);

module.exports = Class;
