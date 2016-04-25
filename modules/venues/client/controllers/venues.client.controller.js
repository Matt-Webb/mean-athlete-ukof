'use strict';

// Venues controller
angular.module('venues').controller('VenuesController', ['$scope', '$stateParams', '$location', 'Authentication',
    'Venues', 'Cities', 'VenuesByCity', 'VenueBySlug', 'HelperService', 'uiGmapGoogleMapApi',
    function($scope, $stateParams, $location, Authentication, Venues, Cities, VenuesByCity, VenueBySlug, HelperService, uiGmapGoogleMapApi) {
        $scope.authentication = Authentication;

        $scope.city = $stateParams.city || 'All Locations';

        if ($stateParams.city) {
            $scope.locationTitle = 'Other Locations';
        } else {
            $scope.locationTitle = 'Filter by Location';
        }

        $scope.findCities = function() {
            $scope.cities = Cities.query();
        };

        $scope.findVenueByCity = function() {
            VenuesByCity.search({
                'city': $stateParams.city
            }, function(venues) {
                // create the images url data:
                venues.forEach(function(venue) {
                    venue.image = 'modules/venues/client/img/venues/' + venue.slug + '-270x288.png';
                });
                $scope.venues = venues;
            });

            // put city list on scope:
            $scope.findCities();
        };

        // Find existing Venue
        $scope.findOne = function() {
            VenueBySlug.search({
                slug: $stateParams.name
            }, function(venue) {
                $scope.venue = venue[0];
                if (venue[0].address.latitude || venue[0].address.longditude) {
                    $scope.venue.googleMap = '//www.google.co.uk/maps/place/' + venue[0].slug.split('-').join('+') + '/@' + venue[0].address.latitude + ',' + venue[0].address.longditude;

                    uiGmapGoogleMapApi.then(function(maps) {
                            $scope.map = {
                                centre: {
                                    latitude: venue[0].address.latitude,
                                    longitude: venue[0].address.longditude
                                },
                                zoom: 9
                            };
                    });
                }
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
