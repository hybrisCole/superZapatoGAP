'use strict';

angular.module('superZapatoGapApp')
  .controller('ShoppingcartCtrl',['$scope','$timeout','productoService', function ($scope,$timeout,productoService) {
    $scope.productosCargados = false;
    productoService.listado().then(function(productos){
      // console.log(productos);
      $scope.items = _.map(productos,function(producto){
        producto.quantityToAdd = 1;
        return producto;
      });
      $scope.productosCargados = true;
    });

    $scope.bricks = [{src:'http://lorempixel.com/g/400/200/?9970'},{src:'http://lorempixel.com/g/400/200/?9970'},{src:'http://lorempixel.com/g/400/200/?9970'}]

    $scope.cart_items = [
    ];

    $scope.remove = function(index) {
      $scope.items.splice(index, 1);
    };

    $scope.removeFromCart = function(index) {
      $scope.cart_items.splice(index, 1);
    };

    $scope.add_product = function() {
      $scope.items.push({title: $scope.item_name,quantity: $scope.item_quantity,price: $scope.item_price});
      $scope.item_name = "";
      $scope.item_quantity = "";
      $scope.item_price = "";
    };

    $scope.addToCart = function(item) {
      $scope.cart_items.push({title: item.nombre , quantity: item.quantityToAdd ,price: item.precio});
    };

    $scope.myfilter = function() {
      var array = [];
      for(var key in $scope.cart_items) {
        array.push($scope.cart_items[key]);
      }
      return $filter('filter')(array, $scope.query);
    };

    $scope.cartTotal = function() {
      var total = 0;
      angular.forEach($scope.cart_items, function(cart_items, key){
        total += cart_items.price * cart_items.quantity;
      });
      return total;
    }

    //Modal:
    $scope.modalOpts = {
      backdropFade: true,
      dialogFade:true,
      keyBoard:true
    };
    $scope.openModalVerProducto = function (item) {
      $scope.verProducto = item;
      $scope.modalVerProducto = true;

    };

    $scope.closeModalVerProducto = function () {
      $scope.verProducto = {};
      $scope.modalVerProducto = false;
    };

    $scope.openModalVerCarrito = function () {
      // $scope.verCarrito = item;
      $scope.modalVerCarrito = true;
    };
    $scope.closeModalVerCarrito = function () {
      $scope.verCarrito = {};
      $scope.modalVerCarrito = false;
    };

    //Slider
    $scope.slideInterval = 5000;

  }]);
