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
      {
        ability_name: "Scholar's Seal",
        class_id:1,
        location:16
      },

  //Knight 2

  

      {
        ability_name: 'Shield of Flowing Clarity',
        class_id:2,
        location:8
      },
      {
        ability_name: 'Snakeskin Shield',
        class_id:2,
        location:9
      },

  //Warrior 3

      {
        ability_name: 'Amber Crusted Helmet',
        class_id:3,
        location:7
      },

  //Samurai 4

  {
    ability_name: "Ronin's Wakizashi",
    class_id:4,
    location:16
  },

  //Kensei 5

  {
    ability_name: "Volcanic Sheath",
    class_id:5,
    location:18
  },

  //Ninja 6

      {
        ability_name: 'Spider Shuriken',
        class_id:6,
        location:3
      },

  //Rogue 7

      {
        ability_name: 'Cloak of the Planewalker',
        class_id:7,
        location:10
      },
      
      {
        ability_name: 'Vampiric Cape',
        class_id:7,
        location:13
      },
  

  //Assassin 8
    
  {
    ability_name: 'Murky Toxin',
    class_id:8,
    location:15
  },
  {
    ability_name: 'Virulent Venom',
    class_id:8,
    location:15
  },



  //Trickster 9
    
  {
    ability_name: 'Prism of Dancing Swords',
    class_id:9,
    location:14
  },

  //Archer 10
  
      {
        ability_name: 'Cocoon Quiver',
        class_id:10,
        location:2
      },
            {
        ability_name: 'Embellished Quiver(TRoom)',
        class_id:10,
        location:7
      },


  //Huntress 11

  {
    ability_name: 'Lifebringing Lotus',
    class_id:11,
    location:8
  },


  //Bard 12

  
  {
    ability_name: 'Snakecharmer Pungi',
    class_id:12,
    location:9
  },


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
  {
    ability_name: 'Scorchium Stone',
    class_id:15,
    location:18
  },

  //Priest 16

    {
      ability_name: 'Tome of Purification',
      class_id:16,
      location:13
    },

    {
      ability_name: 'Necronomicon',
      class_id:16,
      location:16
    },

  //Sorcerer 17

  {
    ability_name: 'Honey Scepter',
    class_id:17,
    location:5
  },
  {
    ability_name: 'Scepter of Fulmination',
    class_id:17,
    location:17
  },
  {
    ability_name: 'Grotesque Scepter',
    class_id:17,
    location:17
  },
 
  //Summoner 18

  {
    ability_name: 'Mace of the Celestial Forest',
    class_id:18,
    location:10
  },




];

const seedAbilities = () => Ability.bulkCreate(AbilityData);

module.exports = seedAbilities;
