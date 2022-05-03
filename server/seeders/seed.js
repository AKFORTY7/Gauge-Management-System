const db = require('../config/connection');
const { User, Gauge, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const gaugeSeeds = require('./gaugeSeeds.json');
const categorySeeds = require('./categorySeeds.json');

db.once('open', async () => {
  try {
    await Gauge.deleteMany({});
    await User.deleteMany({});
    await Category.deleteMany({});
    await User.create(userSeeds);
    await Gauge.create(gaugeSeeds);
    await Category.create(categorySeeds);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
