'use strict';

/**
 * Module dependencies.
 */
var venuesPolicy = require('../policies/venues.server.policy'),
    venues = require('../controllers/venues.server.controller');

module.exports = function(app) {
    // Venues collection routes
    app.route('/api/venues').all(venuesPolicy.isAllowed)
        .get(venues.list);

    // Single venue routes
    app.route('/api/venues/:city').all(venuesPolicy.isAllowed)
        .get(venues.venueByCity);

    // Single venue routes
    app.route('/api/venues/:venueId').all(venuesPolicy.isAllowed)
        .get(venues.read);

    // Finish by binding the venue middleware
    app.param('venueId', venues.venueByID);
    app.param('city', venues.venueByCity);
};
