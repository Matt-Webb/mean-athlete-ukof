'use strict';

//Venues service used for communicating with the venues REST endpoints
angular.module('venues').factory('Venues', ['$resource',
    function($resource) {
        return $resource('api/venues/:venueId', {
            venueId: '@_id'
        });
    }
]).factory('VenuesByCity', ['$resource',
    function($resource) {
        return $resource('api/venues/:city', {
            city: '@city'
        }, {
            search: {
                method: 'GET',
                isArray: true,
                params: {
                    action: "search",
                    query: '@city'
                }
            }
        });
    }
]);

//Cities service used for communicating with the venues REST endpoints
angular.module('cities').factory('Cities', ['$resource',
    function($resource) {
        return $resource('api/cities/:cityId', {
            cityId: '@_id'
        });
    }
]);
