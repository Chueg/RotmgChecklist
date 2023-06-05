const { Weapon } = require('../models');

const WeaponData = [
  {
    Weapon_name: 'Sword',
  },
  {
    Weapon_name: 'Katana',
  },
  {
    Weapon_name: 'Dagger',
  },
  {
    Weapon_name: 'Bow',
  },
  {
    Weapon_name: 'Staff',
  },
  {
    Weapon_name: 'Wand',
  },
];

const seedWeapons = () => Weapon.bulkCreate(WeaponData);

module.exports = seedWeapons;
