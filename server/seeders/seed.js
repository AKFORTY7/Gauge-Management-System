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
    await User.create(userSeeds);
    await Category.create(categorySeeds);
    await Gauge.create(gaugeSeeds);
    await Admin.create(adminSeeds);

    // for (let i = 0; i < categorySeeds.length; i++) {
    //   const { _id, category_name } = await Category.create(categorySeeds[i]);
    //   const gauge = await Gauge.findOneAndUpdate(
    //     { gauge_name: category_name },
    //     {
    //       $addToSet: {
    //         category: _id,
    //       },
    //     }
    //   );

    // }



  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
