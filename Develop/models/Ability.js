const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Ability extends Model {}

Ability.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
  },
    ability_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'class',
      key: 'id'
  },
  },


    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ability',
  }
);

module.exports = Ability;
