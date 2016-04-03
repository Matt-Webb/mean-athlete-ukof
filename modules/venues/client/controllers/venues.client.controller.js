'use strict';

// Venues controller
angular.module('venues').controller('VenuesController',
['$scope', '$stateParams', '$location', 'Authentication', 'Venues', 'Cities', 'VenuesByCity', 'HelperService',
    function($scope, $stateParams, $location, Authentication, Venues, Cities, VenuesByCity, HelperService) {
        $scope.authentication = Authentication;

        $scope.city = $stateParams.city || 'All Locations';

        if($stateParams.city) {
            $scope.locationTitle = 'Other Locations';
        } else {
            $scope.locationTitle = 'Filter by Location';
        }

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
            VenuesByCity.search({
                'city': $stateParams.city
            }, function(venues) {
                // create the images url data:
                venues.forEach(function(venue) {
                    venue.image = 'modules/venues/client/img/venues/' + venue.name.toLowerCase().split(' ').join('-') + '-270x288.png';
                });
                $scope.venues = venues;
            });

            // put city list on scope:
            $scope.findCities();
        };

        // Find existing Venue
        $scope.findOne = function() {
            $scope.venue = Venues.get({
                venueId: $stateParams.venueId
            });
        };

    }
]).filter('capitalize', function() {
    return function(input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(reg, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) : '';
    };
});
