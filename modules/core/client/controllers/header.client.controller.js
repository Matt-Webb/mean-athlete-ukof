'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus', 'HelperService', '$timeout',
  function ($scope, $state, Authentication, Menus, HelperService, $timeout) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });

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
