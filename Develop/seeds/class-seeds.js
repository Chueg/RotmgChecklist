const { Class } = require('../models');

const ClassData = [
  {
    class_name: 'Paladin',
    weapon_id: 1,
    armor_id: 1,
    ability_type: 'Seal'
  },
  {
    class_name: 'Knight',
    weapon_id: 1,
    armor_id: 1,
    ability_type: 'Shield'
  },
  {
    class_name: 'Warrior',
    weapon_id: 1,
    armor_id: 1,
    ability_type: 'Helm'
  },
  {
    class_name: 'Samurai',
    weapon_id: 2,
    armor_id: 1,
    ability_type: 'Sheath'
  },
  {
    class_name: 'Kensei',
    weapon_id: 2,
    armor_id: 1,
    ability_type: 'Wakizaki'
  },
  {
    class_name: 'Ninja',
    weapon_id: 2,
    armor_id: 2,
    ability_type: 'Star'
  },
  {
    class_name: 'Rogue',
    weapon_id: 3,
    armor_id: 2,
    ability_type: 'Cloak'
  },
  {
    class_name: 'Assassin',
    weapon_id: 3,
    armor_id: 2,
    ability_type: 'Poison'
  },
  {
    class_name: 'Archer',
    weapon_id: 4,
    armor_id: 2,
    ability_type: 'Quiver'
  },
  {
    class_name: 'Huntress',
    weapon_id: 4,
    armor_id: 2,
    ability_type: 'Trap'
  },
  {
    class_name: 'Bard',
    weapon_id: 4,
    armor_id: 3,
    ability_type: 'Lute'
  },
  {
    class_name: 'Wizard',
    weapon_id: 5,
    armor_id: 3,
    ability_type: 'Spell'
  },
  {
    class_name: 'Mystic',
    weapon_id: 5,
    armor_id: 3,
    ability_type: 'Orb'
  },
  {
    class_name: 'Priest',
    weapon_id: 6,
    armor_id: 3,
    ability_type: 'Tome'
  },
  {
    class_name: 'Sorcerer',
    weapon_id: 6,
    armor_id: 3,
    ability_type: 'Rod'
  },
  {
    class_name: 'Summoner',
    weapon_id: 6,
    armor_id: 3,
    ability_type: 'Mace'
  },
];

const seedClasses = () => Class.bulkCreate(ClassData);

module.exports = seedClasses;
