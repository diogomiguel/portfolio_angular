'use strict';

angular.module('myPortfolio.version', [
  'myPortfolio.version.interpolate-filter',
  'myPortfolio.version.version-directive'
])

.value('version', '0.1');
