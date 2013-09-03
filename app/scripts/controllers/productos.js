'use strict';

angular.module('superZapatoGapApp')
  .controller('ProductosCtrl', ['$scope','productoService',function ($scope,productoService) {
    $scope.producto = {imagenesSlide:[{path:'',ultimo:true}]};
    $scope.guardarProducto = function(){
      productoService.guardar($scope.producto).then(function(){
        $scope.producto = {imagenesSlide:[{path:'',ultimo:true}]};
        $scope.productoGuardado = true;
      });
    };
    $scope.agregarSlide = function(){
      _.each($scope.producto.imagenesSlide,function(slide){
        slide.ultimo = false;
      });
      $scope.producto.imagenesSlide.push({path:'',ultimo:true});
    }
  }]);
