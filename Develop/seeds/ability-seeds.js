const { Ability } = require('../models');

const AbilityData = [

  //Paladin 1

    {
        ability_name: 'Seal of the Enchanted Forest',
        class_id:1,
        location:6
      },
      {
        ability_name: 'Sandstone Seal',
        class_id:1,
        location:7
      },

  //Knight 2

  
  {
    ability_name: 'Snakeskin Shield',
    class_id:2,
    location:'Snake Pit'
  },
  {
    ability_name: 'Shield of Flowing Clarity',
    class_id:2,
    location:8
  },

  //Warrior 3
    {
        ability_name: 'Amber Crusted Helmet',
        class_id:3,
        location:7
      },

  //Samurai 4

  //Kensei 5

  //Ninja 6
      {
        ability_name: 'Spider Shuriken',
        class_id:6,
        location:3
      },

  //Rogue 7

  //Assassin 8

  //Trickster 9
  
  //Archer 10
  
      {
        ability_name: 'Cocoon Quiver',
        class_id:10,
        location:2
      },
            {
        ability_name: 'Embellished Quiver',
        class_id:10,
        location:7
      },


  //Huntress 11

  {
    ability_name: 'Lifebringing Lotus',
    class_id:10,
    location:8
  },


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
    location:5
  },
  {
    ability_name: 'Enchantment Orb',
    class_id:15,
    location:8
  },

  //Priest 16

  //Sorcerer 17

  {
    ability_name: 'Honey Scepter',
    class_id:17,
    location:5
  },
 
  //Summoner 18




];

const seedAbilities = () => Ability.bulkCreate(AbilityData);

module.exports = seedAbilities;
