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
      {
        ring_name: "Snake Eye Ring",
        location:9
      },
      {
        ring_name: "Pernicious Peridot(TRoom)",
        location:9
      },
      {
        ring_name: "Cuband",
        location:10
      },
      {
        ring_name: "Ruthvan's Rosary(Doggy)",
        location:13
      },
      {
        ring_name: "Ring of Divine Faith",
        location:13
      },
      
];

const seedRings = () => Ring.bulkCreate(RingData);

module.exports = seedRings;
