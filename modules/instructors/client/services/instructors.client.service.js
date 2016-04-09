'use strict';

//Instructors service used for communicating with the instructors REST endpoints
angular.module('instructors').factory('Instructors', ['$resource',
  function ($resource) {
    return $resource('api/instructors/:instructorId', {
      instructorId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]).factory('InstructorBySlug', ['$resource',
  function ($resource) {
    return $resource('api/instructors/:slug',  {
        slug: '@slug'
    }, {
        search: {
            method: 'GET',
            isArray: true,
            params: {
                action: "search",
                query: '@slug'
            }
        }
    });
  }
]);
