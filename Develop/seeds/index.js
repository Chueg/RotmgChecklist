const seedWeapons = require('./weapon-seeds');
const seedClasses = require('./class-seeds');
const seedArmors = require('./armor-seeds');
const seedAbilities = require('./ability-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedWeapons();
  console.log('\n-----Classes SEEDED -----\n');
  await seedArmors();

  console.log('\n-----WEAPONS SEEDED -----\n');
  await seedClasses();
  console.log('\n-----Classes SEEDED -----\n');
  await seedAbilities();



  console.log('\n-----Classes SEEDED -----\n');
  process.exit(0);
};

seedAll();
