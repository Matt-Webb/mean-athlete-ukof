'use strict';

// Venues controller
angular.module('venues').controller('VenuesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Venues', 'Cities', 'VenuesByCity',
  function ($scope, $stateParams, $location, Authentication, Venues, Cities, VenuesByCity) {
    $scope.authentication = Authentication;

    $scope.city = $stateParams.city


    $scope.findCities = function() {
        console.log('called made!');
        $scope.cities = Cities.query();
        console.log($scope.cities);
    };

    // Find a list of Venues
    // $scope.find = function () {
    //   $scope.venues = Venues.query();
    // };

    $scope.findVenueByCity = function() {
        VenuesByCity.search({'city': $stateParams.city}, function(venues) {
            console.log('Logging ' + venues.length + ' venues.');
            $scope.venues = venues;
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
