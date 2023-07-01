const { Armor } = require('../models');

const ArmorData = [


    //Heavy

    // {
    //     armor_name: 'Fire Dragon Armor',
    //     armor_type: 'H',
    //     location:'Lair of Draconis pyrr'
    //   },

      {
        armor_name: 'Fairy Plate',
        armor_type: 'H',
        location:6
      },
      {
        armor_name: 'Candy Coated Armor',
        armor_type: 'H',
        location:6
      },


    //Light

    {
      armor_name: 'Snakeskin Armor',
      armor_type: 'L',
      location:9
    },
    
    {
      armor_name: 'Acidic Armor ',
      armor_type: 'L',
      location:9
    },
    {
      armor_name: 'Ornate Armor ',
      armor_type: 'L',
      location:11
    },
    {
      armor_name: 'Hallowed Hide(Armor guy)',
      armor_type: 'L',
      location:13
    },
    {
      armor_name: 'Harlequin Armor',
      armor_type: 'L',
      location:14
    },
    {
      armor_name: "Wraith's Brigandine",
      armor_type: 'L',
      location:16
    },

      // {
      //   armor_name: 'Leaf Dragon Hide Armor',
      //   armor_type: 'L',
      //   location:'Lair of Draconis limoz'
      // },


    //Robe
      // {
      //   armor_name: 'Blue Dragon Robe',
      //   armor_type: 'R',
      //   location:'Lair of Draconis nikao'
      // },
      {
        armor_name: 'Robe of the Tlatoani',
        armor_type: 'R',
        location:4
      },
      {
        armor_name: 'Woodland Robe',
        armor_type: 'R',
        location:8
      },
      {
        armor_name: 'Toga Picta',
        armor_type: 'R',
        location:12
      },
      {
        armor_name: 'Chausible of Holy Light',
        armor_type: 'R',
        location:13
      },
      {
        armor_name: "Magician's robe",
        armor_type: 'R',
        location:14
      },
      {
        armor_name: "Robe of the Mad Scientist",
        armor_type: 'R',
        location:17
      },
      {
        armor_name: "Rocky Robe",
        armor_type: 'R',
        location:18
      },
      {
        armor_name: "Molten Mantle(Troom)",
        armor_type: 'R',
        location:18
      },
];

const seedArmors = () => Armor.bulkCreate(ArmorData);

module.exports = seedArmors;
