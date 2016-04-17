'use strict';

// Articles controller
angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
  function ($scope, $stateParams, $location, Authentication, Articles) {
    $scope.authentication = Authentication;

    /*
      example article object:
      {
          "_id" : ObjectId("571372d6ce06919305e42cb5"),
          "oldId" : 5245,
          "title" : "Phillipa Clark's Testimonial",
          "published" : false,
          "imageUrl" : "default-image-5245",
          "category" : ["fitness"],
          "content" : "the blog content here",
          "publishedDate" : "2014-04-20T13:13:21.000Z"
      }
    */

    // Find a list of Articles
    $scope.find = function () {
      Articles.query({ limit: 10 }, function(articles) {
        $scope.articles = articles;
      });
    };

    $scope.pageResult = function(page) {
      Articles.query({limit: 10, skip: 10 }, function(articles) {
        $scope.moreArticles = articles;
      });
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.article = Articles.get({
        articleId: $stateParams.articleId
      });

    };
  }
]);
