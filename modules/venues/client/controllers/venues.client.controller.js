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

                    // create click through link:
                    $scope.venue.googleMap = '//www.google.co.uk/maps/place/' + venue[0].slug.split('-').join('+') + '/@' + venue[0].address.latitude + ',' + venue[0].address.longditude;

                    // define Google map object params (after api promise is resolved):
                    uiGmapGoogleMapApi.then(function(maps) {
                        $scope.map = {
                            center: {
                                latitude: venue[0].address.latitude,
                                longitude: venue[0].address.longditude
                            },
                            zoom: 14
                        };
                        $scope.options = {
                            scrollwheel: false
                        };
                        $scope.marker = {
                            id: 0,
                            coords: {
                                latitude: venue[0].address.latitude,
                                longitude: venue[0].address.longditude
                            },
                            options: {
                                draggable: true
                            },
                            events: {
                                dragend: function(marker, eventName, args) {
                                    $scope.marker.options = {
                                        draggable: true,
                                        labelContent: "",
                                        labelAnchor: "100 0",
                                        labelClass: "marker-labels"
                                    };
                                }
                            }
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
