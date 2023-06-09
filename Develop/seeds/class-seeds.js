const { Class } = require('../models');

const ClassData = [
  {
    class_name: 'Paladin',
    weapon_id: 1,
    armor_id: 1,
  },
  {
    class_name: 'Knight',
    weapon_id: 1,
    armor_id: 1,
  },
  {
    class_name: 'Warrior',
    weapon_id: 1,
    armor_id: 1,
  },
  {
    class_name: 'Samurai',
    weapon_id: 2,
    armor_id: 1,
  },
  {
    class_name: 'Kensei',
    weapon_id: 2,
    armor_id: 1,
  },
  {
    class_name: 'Ninja',
    weapon_id: 2,
    armor_id: 2,
  },
  {
    class_name: 'Rogue',
    weapon_id: 3,
    armor_id: 2,
  },
  {
    class_name: 'Assassin',
    weapon_id: 3,
    armor_id: 2,
  },
  {
    class_name: 'Archer',
    weapon_id: 4,
    armor_id: 2,
  },
  {
    class_name: 'Huntress',
    weapon_id: 4,
    armor_id: 2,
  },
  {
    class_name: 'Bard',
    weapon_id: 4,
    armor_id: 3,
  },
  {
    class_name: 'Wizard',
    weapon_id: 5,
    armor_id: 3,
  },
  {
    class_name: 'Mystic',
    weapon_id: 5,
    armor_id: 3,
  },
  {
    class_name: 'Priest',
    weapon_id: 6,
    armor_id: 3,
  },
  {
    class_name: 'Sorcerer',
    weapon_id: 6,
    armor_id: 3,
  },
  {
    class_name: 'Summoner',
    weapon_id: 6,
    armor_id: 3,
  },
];

const seedClasses = () => Class.bulkCreate(ClassData);

module.exports = seedClasses;
