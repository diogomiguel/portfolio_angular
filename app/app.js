'use strict';

// Declare app level module which depends on views, and components
angular.module('myPortfolio', [
  'ngRoute',
  'akoenig.deckgrid',
  'angular-loading-bar',
  'smoothScroll',
  'myPortfolio.grid',
  'myPortfolio.project',
  'myPortfolio.blog',
  'myPortfolio.about',
  'myPortfolio.contact',
  'myPortfolio.skills'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise(
    {redirectTo: '/'}
  );
}])

.run(['$rootScope', '$location', 'smoothScroll', function($rootScope, $location, smoothScroll) {
    var curPath = $location.path();
    var scrollToDetailsOptions = {
      duration: 600,
      easing: 'easeInOutQuad'
    };
    var detailsElem = document.getElementById('js-detailsview');

    // Set active class Default
    $rootScope.selected = curPath.substring(curPath.lastIndexOf('/') + 1);

    
    $rootScope.select = function(id) {
        // Set active class based on selected card id
        $rootScope.selected = id || '';
        // Scroll to details view
        if (id) {
          smoothScroll(detailsElem, scrollToDetailsOptions);
        }
        
    };



}]);