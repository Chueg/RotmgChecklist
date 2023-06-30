const { Armor } = require('../models');

const ArmorData = [


    //Heavy

    {
        armor_name: 'Fire Dragon Armor',
        armor_type: 'H',
        location:'Lair of Draconis pyrr'
      },


    //Light
      {
        armor_name: 'Leaf Dragon Hide Armor',
        armor_type: 'L',
        location:'Lair of Draconis limoz'
      },


    //Robe
      {
        armor_name: 'Blue Dragon Robe',
        armor_type: 'R',
        location:'Lair of Draconis nikao'
      },
      {
        armor_name: 'Robe of the Tlatoani',
        armor_type: 'R',
        location:'Forbidden Jungle'
      }
];

const seedArmors = () => Armor.bulkCreate(ArmorData);

module.exports = seedArmors;
