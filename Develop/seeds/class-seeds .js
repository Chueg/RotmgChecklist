const { Class } = require('../models');

const ClassData = [
  {
    Class_name: 'Paladin',
    weapon_id: 1,
  },
  {
    Class_name: 'Knight',
    weapon_id: 1,
  },
  {
    Class_name: 'Warrior',
    weapon_id: 1,
  },
  {
    Class_name: 'Samurai',
    weapon_id: 2,
  },
  {
    Class_name: 'Kensei',
    weapon_id: 2,
  },
  {
    Class_name: 'Ninja',
    weapon_id: 2,
  },
  {
    Class_name: 'Rogue',
    weapon_id: 3,
  },
  {
    Class_name: 'Assassin',
    weapon_id: 3,
  },
  {
    Class_name: 'Archer',
    weapon_id: 4,
  },
  {
    Class_name: 'Huntress',
    weapon_id: 4,
  },
  {
    Class_name: 'Bard',
    weapon_id: 4,
  },
  {
    Class_name: 'Wizard',
    weapon_id: 5,
  },
  {
    Class_name: 'Mystic',
    weapon_id: 5,
  },
  {
    Class_name: 'Priest',
    weapon_id: 6,
  },
  {
    Class_name: 'Sorcerer',
    weapon_id: 6,
  },
  {
    Class_name: 'Summoner',
    weapon_id: 6,
  },
];

const seedClasses = () => Class.bulkCreate(ClassData);

module.exports = seedClasses;
