'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication','HelperService',
  function ($scope,Authentication,HelperService) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
  }
]);
