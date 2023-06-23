const { Armor } = require('../models');

const ArmorData = [
    {
        armor_name: '10 Chainmail',
        armor_type: 'H',
      },
      {
        armor_name: 'Basilisk Armor',
        armor_type: 'L'
      },
      {
        armor_name: 'Blue Dragon Robe',
        armor_type: 'R'
      }
];

const seedArmors = () => Armor.bulkCreate(ArmorData);

module.exports = seedArmors;
