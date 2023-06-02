const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Sword',
  },
  {
    category_name: 'Wand',
  },
  {
    category_name: 'Staff',
  },
  {
    category_name: 'Bow',
  },
  {
    category_name: 'Katana',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
