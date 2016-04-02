'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'modules/core/client/views/home.client.view.html'
    })
    .state('classdesc', {
        url: '/outdoor-bootcamp-and-fitness-classes',
        templateUrl: 'modules/core/client/views/classdesc.client.view.html'
    })
    .state('faqs', {
        url: '/faqs',
        templateUrl: 'modules/core/client/views/faqs.client.view.html'
    })
    .state('about', {
        url: '/about-ukof-bootcamp',
        templateUrl: 'modules/core/client/views/about.client.view.html'
    })
    .state('contact', {
        url: '/contact-us',
        templateUrl: 'modules/core/client/views/contact.client.view.html'
    })
    .state('prices', {
        url: '/prices',
        templateUrl: 'modules/core/client/views/prices.client.view.html'
    })
    .state('ocr', {
        url: '/obstacle-races-2016',
        templateUrl: 'modules/core/client/views/ocr.client.view.html'
    })
    .state('corporate', {
        url: '/corporate-fitness',
        templateUrl: 'modules/core/client/views/corporate.client.view.html'
    })
    .state('uniofshef', {
        url: '/corporate-fitness/university-of-sheffield',
        templateUrl: 'modules/core/client/views/uniofshef.client.view.html'
    })
    .state('terms', {
        url: '/terms-and-conditions',
        templateUrl: 'modules/core/client/views/terms.client.view.html'
    })
    .state('joinnow', {
        url: '/join-now',
        templateUrl: 'modules/core/client/views/joinnow.client.view.html'
    })

    .state('not-found', {
      url: '/not-found',
      templateUrl: 'modules/core/client/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'modules/core/client/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'modules/core/client/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    });
  }
]);
