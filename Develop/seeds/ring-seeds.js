const { Ring } = require('../models');

const RingData = [
    {
        ring_name: 'Corsair Ring',
        location:'Pirate Cave'
      },
      {
        ring_name: "First Mate's hook",
        location:'Pirate Cave'
      },
      {
        ring_name: "Spider Eye Ring",
        location:'Spider Den'
      },
      {
        ring_name: "Crystal Bone Ring",
        location:'Forbidden Jungle'
      },
      
];

const seedRings = () => Ring.bulkCreate(RingData);

module.exports = seedRings;
