const { Ring } = require('../models');

const RingData = [
    {
        ring_name: 'Corsair Ring',
        location:1
      },
      {
        ring_name: "First Mate's hook",
        location:1
      },
      {
        ring_name: "Spider Eye Ring",
        location:3
      },
      {
        ring_name: "Crystal Bone Ring",
        location:4
      },

      {
        ring_name: "Ring of Pure Wishes",
        location:6
      },
      {
        ring_name: "Candy Ring",
        location:6
      },
      {
        ring_name: "Steadfast Glyph",
        location:7
      },
      {
        ring_name: "Aquamarine Amulet",
        location:7
      },
      {
        ring_name: "Fairy Ring",
        location:8
      },
      
];

const seedRings = () => Ring.bulkCreate(RingData);

module.exports = seedRings;
