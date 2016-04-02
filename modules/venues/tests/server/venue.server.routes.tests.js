'use strict';

var should = require('should'),
  request = require('supertest'),
  path = require('path'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Venue = mongoose.model('Venue'),
  express = require(path.resolve('./config/lib/express'));

/**
 * Globals
 */
var app, agent, credentials, user, venue;

/**
 * Venue routes tests
 */
describe('Venue CRUD tests', function () {

  before(function (done) {
    // Get application
    app = express.init(mongoose);
    agent = request.agent(app);

    done();
  });

  beforeEach(function (done) {
    // Create user credentials
    credentials = {
      username: 'username',
      password: 'M3@n.jsI$Aw3$0m3'
    };

    // Create a new user
    user = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'test@test.com',
      username: credentials.username,
      password: credentials.password,
      provider: 'local'
    });

    // Save a user to the test db and create new venue
    user.save(function () {
      venue = {
        title: 'Venue Title',
        content: 'Venue Content'
      };

      done();
    });
  });

  it('should be able to save an venue if logged in', function (done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new venue
        agent.post('/api/venues')
          .send(venue)
          .expect(200)
          .end(function (venueSaveErr, venueSaveRes) {
            // Handle venue save error
            if (venueSaveErr) {
              return done(venueSaveErr);
            }

            // Get a list of venues
            agent.get('/api/venues')
              .end(function (venuesGetErr, venuesGetRes) {
                // Handle venue save error
                if (venuesGetErr) {
                  return done(venuesGetErr);
                }

                // Get venues list
                var venues = venuesGetRes.body;

                // Set assertions
                (venues[0].user._id).should.equal(userId);
                (venues[0].title).should.match('Venue Title');

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should not be able to save an venue if not logged in', function (done) {
    agent.post('/api/venues')
      .send(venue)
      .expect(403)
      .end(function (venueSaveErr, venueSaveRes) {
        // Call the assertion callback
        done(venueSaveErr);
      });
  });

  it('should not be able to save an venue if no title is provided', function (done) {
    // Invalidate title field
    venue.title = '';

    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new venue
        agent.post('/api/venues')
          .send(venue)
          .expect(400)
          .end(function (venueSaveErr, venueSaveRes) {
            // Set message assertion
            (venueSaveRes.body.message).should.match('Title cannot be blank');

            // Handle venue save error
            done(venueSaveErr);
          });
      });
  });

  it('should be able to update an venue if signed in', function (done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new venue
        agent.post('/api/venues')
          .send(venue)
          .expect(200)
          .end(function (venueSaveErr, venueSaveRes) {
            // Handle venue save error
            if (venueSaveErr) {
              return done(venueSaveErr);
            }

            // Update venue title
            venue.title = 'WHY YOU GOTTA BE SO MEAN?';

            // Update an existing venue
            agent.put('/api/venues/' + venueSaveRes.body._id)
              .send(venue)
              .expect(200)
              .end(function (venueUpdateErr, venueUpdateRes) {
                // Handle venue update error
                if (venueUpdateErr) {
                  return done(venueUpdateErr);
                }

                // Set assertions
                (venueUpdateRes.body._id).should.equal(venueSaveRes.body._id);
                (venueUpdateRes.body.title).should.match('WHY YOU GOTTA BE SO MEAN?');

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should be able to get a list of venues if not signed in', function (done) {
    // Create new venue model instance
    var venueObj = new Venue(venue);

    // Save the venue
    venueObj.save(function () {
      // Request venues
      request(app).get('/api/venues')
        .end(function (req, res) {
          // Set assertion
          res.body.should.be.instanceof(Array).and.have.lengthOf(1);

          // Call the assertion callback
          done();
        });

    });
  });

  it('should be able to get a single venue if not signed in', function (done) {
    // Create new venue model instance
    var venueObj = new Venue(venue);

    // Save the venue
    venueObj.save(function () {
      request(app).get('/api/venues/' + venueObj._id)
        .end(function (req, res) {
          // Set assertion
          res.body.should.be.instanceof(Object).and.have.property('title', venue.title);

          // Call the assertion callback
          done();
        });
    });
  });

  it('should return proper error for single venue with an invalid Id, if not signed in', function (done) {
    // test is not a valid mongoose Id
    request(app).get('/api/venues/test')
      .end(function (req, res) {
        // Set assertion
        res.body.should.be.instanceof(Object).and.have.property('message', 'Venue is invalid');

        // Call the assertion callback
        done();
      });
  });

  it('should return proper error for single venue which doesnt exist, if not signed in', function (done) {
    // This is a valid mongoose Id but a non-existent venue
    request(app).get('/api/venues/559e9cd815f80b4c256a8f41')
      .end(function (req, res) {
        // Set assertion
        res.body.should.be.instanceof(Object).and.have.property('message', 'No venue with that identifier has been found');

        // Call the assertion callback
        done();
      });
  });

  it('should be able to delete an venue if signed in', function (done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new venue
        agent.post('/api/venues')
          .send(venue)
          .expect(200)
          .end(function (venueSaveErr, venueSaveRes) {
            // Handle venue save error
            if (venueSaveErr) {
              return done(venueSaveErr);
            }

            // Delete an existing venue
            agent.delete('/api/venues/' + venueSaveRes.body._id)
              .send(venue)
              .expect(200)
              .end(function (venueDeleteErr, venueDeleteRes) {
                // Handle venue error error
                if (venueDeleteErr) {
                  return done(venueDeleteErr);
                }

                // Set assertions
                (venueDeleteRes.body._id).should.equal(venueSaveRes.body._id);

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should not be able to delete an venue if not signed in', function (done) {
    // Set venue user
    venue.user = user;

    // Create new venue model instance
    var venueObj = new Venue(venue);

    // Save the venue
    venueObj.save(function () {
      // Try deleting venue
      request(app).delete('/api/venues/' + venueObj._id)
        .expect(403)
        .end(function (venueDeleteErr, venueDeleteRes) {
          // Set message assertion
          (venueDeleteRes.body.message).should.match('User is not authorized');

          // Handle venue error error
          done(venueDeleteErr);
        });

    });
  });

  afterEach(function (done) {
    User.remove().exec(function () {
      Venue.remove().exec(done);
    });
  });
});
