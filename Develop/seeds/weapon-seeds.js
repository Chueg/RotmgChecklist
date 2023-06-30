const { Weapon } = require('../models');

const WeaponData = [

//SWORD//

  {
    weapon_name: 'Demon Blade',
    weapon_type: 'Sword',
    location:'abyss'
  },
  
  {
    weapon_name: 'Pixie Enchanted Sword',
    weapon_type: 'Sword',
    location:6
  },

  {
    weapon_name: 'Arcane Rapier',
    weapon_type: 'Sword',
    location:7
  },



//KATANA//



  {
    weapon_name: 'Celestial Blade',
    weapon_type: 'Katana',
    location:'lod feargus'

  },



//DAGGER//



  {
    weapon_name: 'Etherite Dagger',
    weapon_type: 'Dagger',
    location: 'Haunted Cemetary'
  },
  {
    weapon_name: 'Poison Fang Dagger',
    weapon_type: 'Dagger',
    location: 3
  },



//BOW//


  {
    weapon_name: 'Doom Bow',
    weapon_type: 'Bow',
    location: 'Undead Lair'
  },
  {
    weapon_name: 'Bramble Bow',
    weapon_type: 'Bow',
    location: 2
  },
  {
    weapon_name: 'Resplendent Bow',
    weapon_type: 'Bow',
    location: 7
  },




//STAFFS//


  {
    weapon_name: 'Staff of Prejudice',
    weapon_type: 'Staff',
    location: 'Sprite World'
  },
  {
    weapon_name: 'Staff of the Crystal Serpent',
    weapon_type: 'Staff',
    location: 4
  },
  {
    weapon_name: 'Spirit Staff',
    weapon_type: 'Staff',
    location: 8
  },

//WANDS//


  // {
  //   weapon_name: 'Crystal Wand',
  //   weapon_type: 'Wand',
  //   location: 'Crystal'
  // },
];

const seedWeapons = () => Weapon.bulkCreate(WeaponData);

module.exports = seedWeapons;
