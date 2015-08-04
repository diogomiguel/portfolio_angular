'use strict';

function ProjectCtrl ($routeParams, GridService) {
    var vm = this;
    vm.article = {};

    GridService.getById('project/project.json', $routeParams.project_id)
        .then(function(data) {
            vm.article = data;
            vm.imageLink = function() {
                if (data.links.length) {
                    return vm.article.links[0][1];
                }
                
                return '';
            };
        });
}

angular.module('myPortfolio.project', ['ngRoute', 'myPortfolio.grid.grid-service'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/project/:project_id', {
        templateUrl: 'project/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
    });
}])

.controller('ProjectCtrl', ['$routeParams', 'GridService', ProjectCtrl]);