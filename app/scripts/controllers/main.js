'use strict';

angular.module('superZapatoGapApp')
  .controller('MainCtrl', function ($scope,productoService) {
    $scope.urls = [
      '/shoppingCart',
      '/productos',
    ];
    productoService.cargar();
  });

