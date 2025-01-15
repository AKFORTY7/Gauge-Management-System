const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URL || 'mongodb+srv://Aditya:AKforty7@cluster0.juk8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
