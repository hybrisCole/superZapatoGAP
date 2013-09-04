'use strict';

angular.module('superZapatoGapApp')
  .controller('MainCtrl', function ($scope) {
    $scope.urls = [
      '/soppingCart',
      '/productos',
    ];
  });

