'use strict';

/**
 * Module dependencies.
 */
var citiesPolicy = require('../policies/cities.server.policy'),
  cities = require('../controllers/cities.server.controller');

module.exports = function (app) {
  // cities collection routes
  app.route('/api/cities').all(citiesPolicy.isAllowed)
    .get(cities.list);

  // Single venue routes
  app.route('/api/cities/:cityId').all(citiesPolicy.isAllowed)
    .get(cities.read);

  // Finish by binding the venue middleware
  app.param('cityId', cities.cityByID);
};
