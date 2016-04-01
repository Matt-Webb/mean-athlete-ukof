'use strict';

// Instructors controller
angular.module('instructors').controller('InstructorsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Instructors', 'HelperService',
    '$timeout',
  function ($scope, $stateParams, $location, Authentication, Instructors, HelperService, $timeout) {
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

    $timeout(function() {
        HelperService.script();
        HelperService.template();
        HelperService.banner();
        HelperService.theme();
        HelperService.menu();
        HelperService.dropdown();
    }, 3000);
  }
]);
