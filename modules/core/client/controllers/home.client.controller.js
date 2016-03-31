'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication','HelperService', '$timeout',
  function ($scope,Authentication,HelperService,$timeout) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
      console.log('home Ctrl called');
      //var vm = this;
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
