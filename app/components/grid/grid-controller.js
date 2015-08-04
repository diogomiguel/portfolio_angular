'use strict';

function GridCtrl (GridService) {
    var vm = this;

    vm.filters = {
        category: ''
    };
    vm.articles = [];

    GridService.get('components/grid/grid.json')
        .then(function(data) {
            vm.articles = data;
        });
}

angular.module('myPortfolio.grid.grid-controller', ['myPortfolio.grid.grid-service', 'ngAnimate'])
.controller('GridCtrl', ['GridService', GridCtrl]);