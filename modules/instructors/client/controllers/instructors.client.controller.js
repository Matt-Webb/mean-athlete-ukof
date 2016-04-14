'use strict';

// Instructors controller
angular.module('instructors').controller('InstructorsController', ['$scope', '$stateParams', '$location', 'Authentication',
'Instructors','InstructorBySlug',
  function ($scope, $stateParams, $location, Authentication, Instructors, InstructorBySlug) {
    $scope.authentication = Authentication;


    // Find a list of Instructors
    $scope.find = function () {
      $scope.instructors = Instructors.query();
    };

    // Find existing Instructor
    $scope.findOne = function () {
      $scope.instructor = Instructors.get({
        instructorId: $stateParams.instructorId
      });
    };

    $scope.findBySlug = function() {
        InstructorBySlug.search({slug: $stateParams.slug }, function(instructor) {
            $scope.instructor = instructor;
        });
    };

  }
]);
