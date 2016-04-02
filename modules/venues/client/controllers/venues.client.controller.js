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

    $scope.findVenueByCity = function() {
        $scope.city = $stateParams.city;
        console.log($scope.city);
        $scope.venues = Venues.query({
            'address.city': $stateParams.city
        });
    };

    // Find existing Venue
    $scope.findOne = function () {
      $scope.venue = Venues.get({
        venueId: $stateParams.venueId
      });
    };
  }
]).filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
  };
});
