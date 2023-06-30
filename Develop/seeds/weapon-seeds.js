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
    weapon_name: 'Poison Fang Dagger',
    weapon_type: 'Dagger',
    location: 'Spider Den'
  },






  {
    weapon_name: 'Doom Bow',
    weapon_type: 'Bow',
    location: 'Undead Lair'
  },
  {
    weapon_name: 'Bramble Bow',
    weapon_type: 'Bow',
    location: 'Forest Maze'
  },






  {
    weapon_name: 'Staff of Prejudice',
    weapon_type: 'Staff',
    location: 'Sprite World'
  },
  {
    weapon_name: 'Staff of the Crystal Serpent',
    weapon_type: 'Staff',
    location: 'Forbidden Jungle'
  },





  {
    weapon_name: 'Crystal Wand',
    weapon_type: 'Wand',
    location: 'Crystal'
  },
];

const seedWeapons = () => Weapon.bulkCreate(WeaponData);

module.exports = seedWeapons;
