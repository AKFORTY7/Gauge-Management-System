const db = require('../config/connection');
const { User, Gauge, Category, Admin, Tracking } = require('../models');
const userSeeds = require('./userSeeds.json');
const gaugeSeeds = require('./gaugeSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const adminSeeds = require('./adminSeeds.json');

db.once('open', async () => {
  try {
    await Gauge.deleteMany({});
    await User.deleteMany({});
    await Category.deleteMany({});
    await Admin.deleteMany({});

    await User.create(userSeeds);
    await Category.create(categorySeeds);
    await Gauge.create(gaugeSeeds);
    await Admin.create(adminSeeds);

    await Gauge.findOneAndUpdate({ gauge_name: "6.05" }, { category: "627a448c2a4a7dba93910a2d" });
    await Gauge.findOneAndUpdate({ gauge_name: "M2 x 1.0 - 6g" }, { category: "627a448c2a4a7dba93910a2e" });
    await Gauge.findOneAndUpdate({ gauge_name: "M6 x 1.0 - 6h" }, { category: "627a448c2a4a7dba93910a2f" });



  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
