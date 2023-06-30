const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Ring extends Model {}

Ring.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
  ring_name: {
    type: DataTypes.STRING,
    allowNull: false,
    default: 'minge',
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
    modelName: 'ring',
  }
);

module.exports = Ring;
