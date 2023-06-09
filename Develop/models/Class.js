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

    weapon_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'weapon',
          key: 'id'
      },
      },
      armor_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'armor',
          key: 'id'
      },
      }
      
    
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
