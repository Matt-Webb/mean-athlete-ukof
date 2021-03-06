'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  City = mongoose.model('City'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));


/**
 * Show the current city
 */
exports.read = function (req, res) {
  res.json(req.city);
};

/**
 * List of Cities
 */
exports.list = function (req, res) {

  City.find().sort('-created').populate('user', 'displayName').exec(function (err, cities) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(cities);
    }
  });
};

/**
* City by name
*/
exports.cityByName = function(req, res) {

    var cityParam = req.params.name || '';

    City.findOne({city: { $regex: new RegExp('^' + cityParam, 'i')}}).exec(function (err, city) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(city);
      }
    });
};

/**
 * City middleware
 */
exports.cityByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'City is invalid'
    });
  }

  City.findById(id).populate('user', 'displayName').exec(function (err, city) {
    if (err) {
      return next(err);
  } else if (!city) {
      return res.status(404).send({
        message: 'No venue with that identifier has been found'
      });
    }
    req.city = city;
    next();
  });
};
