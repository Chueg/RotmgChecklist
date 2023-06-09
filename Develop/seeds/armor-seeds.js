const { Armor } = require('../models');

const ArmorData = [
    {
        armor_type: 'Heavy',
      },
      {
        armor_type: 'Light'
      },
      {
        armor_type: 'Robe'
      }
];

const seedArmors = () => Armor.bulkCreate(ArmorData);

module.exports = seedArmors;
