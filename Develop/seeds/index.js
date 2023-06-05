const seedWeapons = require('./weapon-seeds');
const seedClasses = require('./class-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedWeapons();
  console.log('\n-----WEAPONS SEEDED -----\n');
  await seedClasses();
  console.log('\n-----Classes SEEDED -----\n');
  process.exit(0);
};

seedAll();
