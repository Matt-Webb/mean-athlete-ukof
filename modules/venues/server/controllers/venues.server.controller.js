'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Venue = mongoose.model('Venue'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a venue
 */
exports.create = function (req, res) {
  var venue = new Venue(req.body);
  venue.user = req.user;

  venue.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(venue);
    }
  });
};

/**
 * Show the current venue
 */
exports.read = function (req, res) {
  res.json(req.venue);
};

/**
 * Update a venue
 */
exports.update = function (req, res) {
  var venue = req.venue;

  venue.title = req.body.title;
  venue.content = req.body.content;

  venue.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(venue);
    }
  });
};

/**
 * Delete an venue
 */
exports.delete = function (req, res) {
  var venue = req.venue;

  venue.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(venue);
    }
  });
};

/**
 * List of Venues
 */
exports.list = function (req, res) {
  Venue.find().sort('-created').populate('user', 'displayName').exec(function (err, venues) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(venues);
    }
  });
};

exports.venueByCity = function (req, res) {
    var city = req.params.city;

    Venue.find({'address.city':  { $regex : new RegExp(city, "i") }}).exec(function(err, venues) {
        if(err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(venues);
        }
    });
};

exports.venueBySlug = function (req, res) {
    var slug = req.params.slug;

    Venue.find({'slug': slug }).exec(function(err, venue) {
        if(err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(venue);
        }
    });
};

/**
 * Venue middleware
 */
exports.venueByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Venue is invalid'
    });
  }

  Venue.findById(id).populate('user', 'displayName').exec(function (err, venue) {
    if (err) {
      return next(err);
    } else if (!venue) {
      return res.status(404).send({
        message: 'No venue with that identifier has been found'
      });
    }
    req.venue = venue;
    next();
  });
};
