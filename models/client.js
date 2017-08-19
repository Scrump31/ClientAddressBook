const mongoose = require('mongoose');

const Client = mongoose.model('Client', {
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  phone: {
    type: Number,
    minlength: 7,
  },
  address: {
    type: String,
  },
  company: {
    type: String,
  },
  notes: {
    type: String,
    maxlength: 255,
  },
});

module.exports = { Client };
