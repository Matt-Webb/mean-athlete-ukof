'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Venue Schema
 */
var CitySchema = new Schema({
    name: {
        type: String
    }
});


mongoose.model('City', CitySchema);
