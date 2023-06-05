// import models

const Weapon = require('./Weapon');
const Class = require('./Class');


// Categories have many Classes
Weapon.hasMany(Class, {
  foreignKey: 'weapon_id'
});

// Class belongsTo Weapon
Class.belongsTo(Weapon, { foreignKey: 'weapon_id',});


module.exports = {
  Weapon,
  Class

};
