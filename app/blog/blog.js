'use strict';

function BlogCtrl ($routeParams, GridService) {
  var vm = this;
	vm.article = {};

  GridService.getById('blog/blog.json', $routeParams.blog_id)
    .then(function(data) {
        vm.article = data;
    });
}

angular.module('myPortfolio.blog', ['ngRoute', 'myPortfolio.grid.grid-service'])

.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/blog/:blog_id', {
  		templateUrl: 'blog/blog.html',
  		controller: 'BlogCtrl',
  		controllerAs: 'blog'
  	});
}])

.controller('BlogCtrl', ['$routeParams', 'GridService', BlogCtrl]);