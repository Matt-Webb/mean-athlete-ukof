'use strict';

// Venues controller
angular.module('venues').controller('VenuesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Venues', 'Cities',
  function ($scope, $stateParams, $location, Authentication, Venues, Cities) {
    $scope.authentication = Authentication;

    // Find a list of Venues by a specific city (with address object);
    $scope.findByLocation = function() {
        $scope.venues = Venues.get({
            'address.city' : $stateParams.city
        });
    };

    $scope.findCities = function() {
        console.log('called made!');
        $scope.cities = Cities.query();
        console.log($scope.cities);
    };

    // Find a list of Venues
    $scope.find = function () {
      $scope.venues = Venues.query();
    };

    // Find existing Venue
    $scope.findOne = function () {
      $scope.venue = Venues.get({
        venueId: $stateParams.venueId
      });
    };
  }
]);
