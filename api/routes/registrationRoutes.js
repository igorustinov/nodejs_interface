'use strict';
module.exports = function(app) {
  var registrationControllers = require('../controllers/registrationController');


  // todoList Routes
  app.route('/registrations')
    .get(registrationControllers.list_registrations)
    .post(registrationControllers.create_registration);


  app.route('/registrations/:id')
    .get(registrationControllers.read_registration);
};