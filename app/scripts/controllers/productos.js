'use strict';

angular.module('superZapatoGapApp')
  .controller('ProductosCtrl', ['$scope','productoService',function ($scope,productoService) {
    $scope.guardarProducto = function(){
      productoService.guardar($scope.producto).then(function(){
        $scope.producto = {};
        $scope.productoGuardado = true;
      });
    };
  }]);
