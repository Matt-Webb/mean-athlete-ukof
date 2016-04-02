'use strict';

(function () {
  // Venues Controller Spec
  describe('Venues Controller Tests', function () {
    // Initialize global variables
    var VenuesController,
      scope,
      $httpBackend,
      $stateParams,
      $venue,
      Authentication,
      Venues,
      mockArticle;

    // The $resource service augments the response object with methods for updating and deleting the resource.
    // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
    // the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
    // When the toEqualData matcher compares two objects, it takes only object properties into
    // account and ignores methods.
    beforeEach(function () {
      jasmine.addMatchers({
        toEqualData: function (util, customEqualityTesters) {
          return {
            compare: function (actual, expected) {
              return {
                pass: angular.equals(actual, expected)
              };
            }
          };
        }
      });
    });

    // Then we can start by loading the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function ($controller, $rootScope, _$venue_, _$stateParams_, _$httpBackend_, _Authentication_, _Venues_) {
      // Set a new global scope
      scope = $rootScope.$new();

      // Point global variables to injected services
      $stateParams = _$stateParams_;
      $httpBackend = _$httpBackend_;
      $venue = _$venue_;
      Authentication = _Authentication_;
      Venues = _Venues_;

      // create mock venue
      mockArticle = new Venues({
        _id: '525a8422f6d0f87f0e407a33',
      });

      // Mock logged in user
      Authentication.user = {
        roles: ['user']
      };

      // Initialize the Venues controller.
      VenuesController = $controller('VenuesController', {
        $scope: scope
      });
    }));

    it('$scope.find() should create an array with at least one venue object fetched from XHR', inject(function (Venues) {
      // Create a sample venues array that includes the new venue
      var sampleVenues = [mockArticle];

      // Set GET response
      $httpBackend.expectGET('api/venues').respond(sampleVenues);

      // Run controller functionality
      scope.find();
      $httpBackend.flush();

      // Test scope value
      expect(scope.venues).toEqualData(sampleVenues);
    }));

    it('$scope.findOne() should create an array with one venue object fetched from XHR using a venueId URL parameter', inject(function (Venues) {
      // Set the URL parameter
      $stateParams.venueId = mockArticle._id;

      // Set GET response
      $httpBackend.expectGET(/api\/venues\/([0-9a-fA-F]{24})$/).respond(mockArticle);

      // Run controller functionality
      scope.findOne();
      $httpBackend.flush();

      // Test scope value
      expect(scope.venue).toEqualData(mockArticle);
    }));


  });
}());
