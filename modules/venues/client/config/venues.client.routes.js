'use strict';

// Setting up route
angular.module('venues').config(['$stateProvider',
    function($stateProvider) {
        // Venues state routing
        $stateProvider
            .state('venues', {
                abstract: true,
                url: '/venues',
                template: '<ui-view/>'
            })
            .state('venues.list', {
                url: '',
                templateUrl: 'modules/venues/client/views/list-venues.client.view.html'
            })
            .state('venues.city', {
                url: '/:city',
                templateUrl: 'modules/venues/client/views/list-venues.client.view.html'
            })
            .state('venues.view', {
                url: '/:venueId',
                templateUrl: 'modules/venues/client/views/view-venue.client.view.html'
            });
    }
]);

angular.module('cities').config(['$stateProvider',
    function($stateProvider) {
        // Cities state routing
        $stateProvider
            .state('locations', {
                url: '/locations',
                templateUrl: 'modules/venues/client/views/list-locations.client.view.html'
            });
    }
]);
