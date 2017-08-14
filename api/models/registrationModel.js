'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AccountsSchema = new Schema({
  token: {
    type: String,
    Required: 'Specify token id'
  },
  title: {
    type: String,
    Required: 'Specify title'
  },
  description: {
    type: String,
    Required: 'Specify description string'
  },
  address: {
    type: String,
    Required: 'Specify address'
  },
  phone: {
    type: String,
    Required: 'Specify phone number'
  },
  email: {
    type: String,
    Required: 'Specify email'
  },
  ipAddress: {
    type: String,
    Required: 'Specify ipAddress'
  }
});

module.exports = mongoose.model('Accounts', AccountsSchema);