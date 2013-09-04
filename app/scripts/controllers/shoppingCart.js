'use strict';

angular.module('superZapatoGapApp')
  .controller('ShoppingcartCtrl',['$scope','productoService', function ($scope,productoService) {
    productoService.listado().then(function(productos){
      // console.log(productos);
      $scope.items = productos;
    })
    

    $scope.cart_items = [
      {title: 'Paint pots', quantity: 3, price: 3.95},
      {title: 'Polka dots', quantity: 8, price: 12.95},
      {title: 'Paint pots', quantity: 3, price: 3.95},
      {title: 'Polka dots', quantity: 1, price: 12.95},
      {title: 'Pebbles', quantity: 6, price: 6.95}
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
      $scope.cart_items.push({title: item.nombre , quantity: 1 ,price: item.precio});
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
    $scope.openModalEliminarRopa = function (ropa) {
      console.log("lola");
    };
    $scope.closeModalEliminarRopa = function () {
      $scope.modalEliminarRopa = false;
    };

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

    //Slider
    $scope.slideInterval = 5000;

  }]);
