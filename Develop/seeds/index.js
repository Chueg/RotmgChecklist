const seedWeapons = require('./weapon-seeds');
const seedClasses = require('./class-seeds');
const seedArmors = require('./armor-seeds');
const seedAbilities = require('./ability-seeds');
const seedRings = require('./ring-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedWeapons();
  console.log('\n-----Weapons SEEDED -----\n');
  await seedArmors();

  console.log('\n-----ARMORS SEEDED -----\n');
  await seedClasses();
  console.log('\n-----CLASSES SEEDED -----\n');
  await seedAbilities();
  console.log('\n-----ABILITIES SEEDED -----\n');
  await seedRings();



  console.log('\n----- RINGS SEEDED -----\n');
  process.exit(0);
};

seedAll();
