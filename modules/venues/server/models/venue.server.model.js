'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Venue Schema
 */
var VenueSchema = new Schema({
    name: {
        type: String
    },
    address: {
        typeL: Object
    },
    image: {
        type: String
    },
    active: {
        type: Boolean
    },
    outdoor: {
        type: Boolean
    },
    indoor: {
        type: Boolean
    },
    created: {
        type: Date,
        default: Date.now
    }
});


mongoose.model('Venue', VenueSchema);
