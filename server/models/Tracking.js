const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const trackingSchema = new Schema({

  gauge:{
    type: Schema.Types.ObjectId,
    ref: 'Gauge',
    required: true,
    trim: true,
  },

  user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    trim: true,
  },

  quantity: {
    type: Number,
    default: 1,   
    trim: true,
  },

  borrowDate:{
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    required: true,
  },

  returnedDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    required: true,

  }


});

const Tracking = model('Tracking', trackingSchema);

module.exports = Tracking;