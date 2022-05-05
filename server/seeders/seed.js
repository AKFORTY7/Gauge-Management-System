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
    await Category.create(categorySeeds);

    // gaugeSeeds[0] = {category: "6273871cb3958e177054afb5"};

    await Gauge.create(gaugeSeeds);

    const filter = { gauge_name: "6.05"};
    const update = { category: "6273871cb3958e177054afb5"};
    let doc = await Gauge.findOneAndUpdate(filter, update);
 
   

    const filter1 = { gauge_name: "M2 x 1.0 - 6g"};
    const update1 = { category: "627389e03943dce50d07e272"};
    doc = await Gauge.findOneAndUpdate(filter1, update1);

    const filter2 = { gauge_name: "M6 x 1.0 - 6h"};
    const update2 = { category: "627389f618ef6964e4af6e7a"};
    doc = await Gauge.findOneAndUpdate(filter2, update2);
  





  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
