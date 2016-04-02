'use strict';

// Configuring the Venues module
angular.module('venues').run(['Menus',
  function (Menus) {
    // Add the venues dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Venues',
      state: 'venues',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'venues', {
      title: 'List Venues',
      state: 'venues.list'
    });

  }
]);
