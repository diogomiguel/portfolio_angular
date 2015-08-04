'use strict';

function SkillsCtrl (GridService) {
  var vm = this;
    vm.article = {};

  GridService.getById('skills/skills.json')
    .then(function(data) {
        vm.article = data;
    });
}

angular.module('myPortfolio.skills', ['ngRoute', 'myPortfolio.grid.grid-service'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/skills', {
        templateUrl: 'skills/skills.html',
        controller: 'SkillsCtrl',
        controllerAs: 'skills'
    });
}])

.controller('SkillsCtrl', ['GridService', SkillsCtrl]);