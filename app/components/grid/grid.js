'use strict';

angular.module('myPortfolio.grid', [
    'ngRoute',
    'ngSanitize',
    'myPortfolio.grid.grid-service',
    'myPortfolio.grid.grid-controller'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'GridCtrl',
    controllerAs: 'card'
  });
}]);
