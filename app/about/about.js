'use strict';

function AboutCtrl (GridService) {
  var vm = this;
    vm.article = {};

  GridService.getById('about/about.json')
    .then(function(data) {
        vm.article = data;
    });
}

angular.module('myPortfolio.about', ['ngRoute', 'myPortfolio.grid.grid-service'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    });
}])

.controller('AboutCtrl', ['GridService', AboutCtrl]);