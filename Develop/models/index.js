// import models

const Weapon = require('./Weapon');
const Class = require('./Class');
const Armor = require('./Armor');
const Ability = require('./Ability');
const Ring = require('./Ring');


Class.hasMany(Ability, {
  foreignKey: 'class_id'
});

// AZrmor belongsTo Class
Ability.belongsTo(Class, { foreignKey: 'class_id',});


module.exports = {
  Weapon,
  Class,
  Armor,
  Ability,
  Ring

};
