const { Armor } = require('../models');

const ArmorData = [
    {
        armor_name: 'Fire Dragon Armor',
        armor_type: 'H',
        location:'lod pyrr'
      },
      {
        armor_name: 'Leaf Dragon Hide Armor',
        armor_type: 'L',
        location:'lod limoz'
      },
      {
        armor_name: 'Blue Dragon Robe',
        armor_type: 'R',
        location:'lod nikao'
      }
];

const seedArmors = () => Armor.bulkCreate(ArmorData);

module.exports = seedArmors;
