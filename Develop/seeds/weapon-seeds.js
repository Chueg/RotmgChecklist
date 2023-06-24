const { Weapon } = require('../models');

const WeaponData = [
  {
    weapon_name: 'Demon Blade',
    weapon_type: 'Sword',
    location:'abyss'
  },
  {
    weapon_name: 'Celestial Blade',
    weapon_type: 'Katana',
    location:'lod feargus'

  },
  {
    weapon_name: 'Etherite Dagger',
    weapon_type: 'Dagger',
    location: 'Haunted Cemetary'
  },
  {
    weapon_name: 'Doom Bow',
    weapon_type: 'Bow',
    location: 'Undead Lair'
  },
  {
    weapon_name: 'Staff of Prejudice',
    weapon_type: 'Staff',
    location: 'Sprite World'
  },
  {
    weapon_name: 'Crystal Wand',
    weapon_type: 'Wand',
    location: 'Crystal'
  },
];

const seedWeapons = () => Weapon.bulkCreate(WeaponData);

module.exports = seedWeapons;
