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










    $scope.groups = [
      {
        title: "Dynamic Group Header - 1",
        content: "Dynamic Group Body - 1"
      },
      {
        title: "Dynamic Group Header - 2",
        content: "Dynamic Group Body - 2"
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };
  }]);
