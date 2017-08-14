'use strict';


var mongoose = require('mongoose'),
  Account = mongoose.model('Accounts');

exports.list_registrations = function(req, res) {
  Account.find({}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};




exports.create_registration = function(req, res) {
  var newAccount = new Account(req.body);
  newAccount.save(function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.read_registration = function(req, res) {
  Account.findById(req.params.token, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};

