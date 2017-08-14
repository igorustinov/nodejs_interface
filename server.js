var express = require('express'),
  app = express(),
  port = process.env.PORT || 8088,
  mongoose = require('mongoose'),
  Account = require('./api/models/registrationModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/registrations');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/registrationRoutes.js');
routes(app);

app.listen(port);

console.log('Hyperledger RESTful API server started on: ' + port);