const { Weapon } = require('../models');

const WeaponData = [

//SWORD//

  {
    weapon_name: 'Demon Blade',
    weapon_type: 'Sword',
    location:18
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



  // {
  //   weapon_name: 'Celestial Blade',
  //   weapon_type: 'Katana',
  //   location:'lod feargus'
  // },

  {
    weapon_name: 'Void Blade',
    weapon_type: 'Katana',
    location:15
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
  {
    weapon_name: 'Bone Dagger',
    weapon_type: 'Dagger',
    location: 13
  },
  {
    weapon_name: 'Soulcursed Scythe(Troom)',
    weapon_type: 'Dagger',
    location: 13
  },
  {
    weapon_name: 'Toxin Tooth',
    weapon_type: 'Dagger',
    location: 15
  },
  {
    weapon_name: 'Corruption Cutter(Troom)',
    weapon_type: 'Dagger',
    location: 16
  },



//BOW//


  {
    weapon_name: 'Doom Bow',
    weapon_type: 'Bow',
    location: 12
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
  {
    weapon_name: 'Deathless Crossbow(Troom)',
    weapon_type: 'Bow',
    location: 16
  },




//STAFFS//



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
  {
    weapon_name: 'Staff of Prejudice',
    weapon_type: 'Staff',
    location: 10
  },
  {
    weapon_name: 'Edictum Praetoris',
    weapon_type: 'Staff',
    location: 12
  },

//WANDS//

  {
    weapon_name: 'Wand of the Bulwark',
    weapon_type: 'Wand',
    location: 9
  },

  {
    weapon_name: 'Sprite Wand',
    weapon_type: 'Wand',
    location: 10
  },
  {
    weapon_name: "St Abraham's Wand",
    weapon_type: 'Wand',
    location: 13
  },
  {
    weapon_name: "Conducting Wand",
    weapon_type: 'Wand',
    location: 17
  },







];

const seedWeapons = () => Weapon.bulkCreate(WeaponData);

module.exports = seedWeapons;
