'use strict';

function ContactCtrl (GridService) {
  var vm = this;
    vm.article = {};

  GridService.getById('contact/contact.json')
    .then(function(data) {
        vm.article = data;
    });
}

angular.module('myPortfolio.contact', ['ngRoute', 'myPortfolio.grid.grid-service'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contact', {
        templateUrl: 'contact/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
    });
}])

.controller('ContactCtrl', ['GridService', ContactCtrl]);