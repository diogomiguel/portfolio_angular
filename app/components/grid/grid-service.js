'use strict';

function GridService ($http, $q) {
    var GridService = {};
    var getJSON = function(url, id) {
        return $http.get(url)
            .then(function(response) {
               return id ? response.data[id] : response.data;
            }, function(response) {
                // something went wrong
                return $q.reject(response.data);
            });
    };

    GridService.get = function(url) {
        return getJSON(url);
    }

    GridService.getById = function(url, id) {
        return getJSON(url, id);
    }

    return GridService;
}

angular.module('myPortfolio.grid.grid-service', [])
.factory('GridService', ['$http', '$q', GridService]);