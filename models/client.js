const mongoose = require('mongoose');

const Client = mongoose.model('Client', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  company: {
    type: String,
  },
  notes: {
    type: String,
  },
});

module.exports = { Client };
