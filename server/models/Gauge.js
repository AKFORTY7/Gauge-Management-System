const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const gaugeSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  current_inventory: {
    type: Number,
    required: true,
    trim: true,
  },
  quantity_borrowed:{
    type: Number,
    required: false,
    trim: true,
  },
  inhouse_PN:{
    type: String,
    required: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

});

const Gauge = model('Gauge', gaugeSchema);

module.exports = Gauge;
