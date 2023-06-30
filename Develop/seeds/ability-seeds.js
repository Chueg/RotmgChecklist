const { Ability } = require('../models');

const AbilityData = [

  //Paladin 1

    {
        ability_name: 'Seal of Blasphemous Prayer',
        class_id:1,
        location:'Pentaract'
      },

  //Knight 2

  
  {
    ability_name: 'Snakeskin Shield',
    class_id:2,
    location:'Snake Pit'
  },

  //Warrior 3
    {
        ability_name: 'Helm of the Juggernaut',
        class_id:3,
        location:'Sphinx, Hermit'
      },

  //Samurai 4

  //Kensei 5

  //Ninja 6
      {
        ability_name: 'Spider Shuriken',
        class_id:6,
        location:'Spider Den'
      },

  //Rogue 7

  //Assassin 8

  //Trickster 9
  
  //Archer 10
  
      {
        ability_name: 'Cocoon Quiver',
        class_id:10,
        location:'Forest Maze'
      },

  //Huntress 11

  //Bard 12

  //Wizard 13

  //Necromancer 14
  {
    ability_name: 'Cracked Crystal Skull',
    class_id:14,
    location:'Forbidden Jungle '
  },


  //Mystic 15

  {
    ability_name: 'Orb of Sweet Demise',
    class_id:15,
    location:'The Hive'
  },

  //Priest 16

  //Sorcerer 17

  {
    ability_name: 'Honey Scepter',
    class_id:17,
    location:'The Hive'
  },
 
  //Summoner 18




];

const seedAbilities = () => Ability.bulkCreate(AbilityData);

module.exports = seedAbilities;
