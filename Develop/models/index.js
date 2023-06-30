// import models

const Weapon = require('./Weapon');
const Class = require('./Class');
const Armor = require('./Armor');
const Ability = require('./Ability');
const Ring = require('./Ring');
const Location = require('./Location');


Class.hasMany(Ability, {
  foreignKey: 'class_id'
});

// AZrmor belongsTo Class
Ability.belongsTo(Class, { foreignKey: 'class_id',});



Location.hasMany(Ability, Armor, Weapon, Ring,{
  foreignKey: 'location_id'
});


Weapon.belongsTo(Location, { foreignKey: 'location_id',});

Ability.belongsTo(Location, { foreignKey: 'location_id',});

Armor.belongsTo(Location, { foreignKey: 'location_id',});

Ring.belongsTo(Location, { foreignKey: 'location_id',});




module.exports = {
  Weapon,
  Class,
  Armor,
  Ability,
  Ring,
  Location

};
