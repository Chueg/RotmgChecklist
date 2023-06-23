const { Ability } = require('../models');

const AbilityData = [
    {
        ability_name: 'Seal of Blasphemous Prayer',
        class_id:1
      },
    {
        ability_name: 'Helm of the Juggernaut',
        class_id:3
      },

      {
        ability_name: 'Staff of prejudice',
        class_id:12
      }
];

const seedAbilities = () => Ability.bulkCreate(AbilityData);

module.exports = seedAbilities;
