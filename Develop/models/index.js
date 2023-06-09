// import models

const Weapon = require('./Weapon');
const Class = require('./Class');
const Armor = require('./Armor');


// Categories have many Classes
Weapon.hasMany(Class, {
  foreignKey: 'weapon_id'
});

// Class belongsTo Weapon
Class.belongsTo(Weapon, { foreignKey: 'weapon_id',});

//Armor belongs to Class

Armor.hasMany(Class, {
  foreignKey: 'armor_id'
});

// AZrmor belongsTo Class
Class.belongsTo(Armor, { foreignKey: 'armor_id',});


module.exports = {
  Weapon,
  Class,
  Armor

};
