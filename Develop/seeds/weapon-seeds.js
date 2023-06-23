const { Weapon } = require('../models');

const WeaponData = [
  {
    weapon_name: 'Big Slingus',
    weapon_type: 'Sword',
  },
  {
    weapon_name: 'Slice',
    weapon_type: 'Katana',
  },
  {
    weapon_name: 'Gringo',
    weapon_type: 'Dagger',
  },
  {
    weapon_name: 'Slime Moment',
    weapon_type: 'Bow',
  },
  {
    weapon_name: 'Long One',
    weapon_type: 'Staff',
  },
  {
    weapon_name: 'Swongus',
    weapon_type: 'Wand',
  },
];

const seedWeapons = () => Weapon.bulkCreate(WeaponData);

module.exports = seedWeapons;
