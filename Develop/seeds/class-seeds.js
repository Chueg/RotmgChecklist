const { Class } = require('../models');

const ClassData = [
  {
    class_name: 'Paladin',
    weapon_type: 'Sword',
    armor_type: 'H',
    ability_type: 'Seal'
  },
  {
    class_name: 'Knight',
    weapon_type: 'Sword',
    armor_type: 'H',
    ability_type: 'Shield'
  },
  {
    class_name: 'Warrior',
    weapon_type: 'Sword',
    armor_type: 'H',
    ability_type: 'Helm'
  },
  {
    class_name: 'Samurai',
    weapon_type: 'Katana',
    armor_type: 'H',
    ability_type: 'Sheath'
  },
  {
    class_name: 'Kensei',
    weapon_type: 'Katana',
    armor_type: 'H',
    ability_type: 'Wakizaki'
  },
  {
    class_name: 'Ninja',
    weapon_type: 'Katana',
    armor_type: 'L',
    ability_type: 'Star'
  },
  {
    class_name: 'Rogue',
    weapon_type: 'Dagger',
    armor_type: 'L',
    ability_type: 'Cloak'
  },
  {
    class_name: 'Assassin',
    weapon_type: 'Dagger',
    armor_type: 'L',
    ability_type: 'Poison'
  },
  {
    class_name: 'Archer',
    weapon_type: 'Bow',
    armor_type: 'L',
    ability_type: 'Quiver'
  },
  {
    class_name: 'Huntress',
    weapon_type: 'Bow',
    armor_type: 'L',
    ability_type: 'Trap'
  },
  {
    class_name: 'Bard',
    weapon_type: 'Bow',
    armor_type: 'R',
    ability_type: 'Lute'
  },
  {
    class_name: 'Wizard',
    weapon_type: 'Staff',
    armor_type: 'R',
    ability_type: 'Spell'
  },
  {
    class_name: 'Mystic',
    weapon_type: 'Staff',
    armor_type: 'R',
    ability_type: 'Orb'
  },
  {
    class_name: 'Priest',
    weapon_type: 'Wand',
    armor_type: 'R',
    ability_type: 'Tome'
  },
  {
    class_name: 'Sorcerer',
    weapon_type: 'Wand',
    armor_type: 'R',
    ability_type: 'Rod'
  },
  {
    class_name: 'Summoner',
    weapon_type: 'Wand',
    armor_type: 'R',
    ability_type: 'Mace'
  },
];

const seedClasses = () => Class.bulkCreate(ClassData);

module.exports = seedClasses;
