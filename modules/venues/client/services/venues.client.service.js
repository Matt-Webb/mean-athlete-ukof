'use strict';

//Venues service used for communicating with the venues REST endpoints
angular.module('venues').factory('Venues', ['$resource',
  function ($resource) {
    return $resource('api/venues/:venueId', {
      venueId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

angular.module('cities').factory('Cities', ['$resource',
  function ($resource) {
    return $resource('api/cities/:cityId', {
      cityId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
