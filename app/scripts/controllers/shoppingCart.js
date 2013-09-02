'use strict';

angular.module('superZapatoGapApp')
  .controller('ShoppingcartCtrl',['$scope','localStorageService', function ($scope,localStorageService) {

    $scope.items = [
      {title: 'Paint pots', quantity: 8, price: 3.95},
      {title: 'Polka dots', quantity: 17, price: 12.95},
      {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

    $scope.cart_items = [
      {title: 'Paint pots', quantity: 3, price: 3.95},
      {title: 'Polka dots', quantity: 7, price: 12.95},
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
      $scope.cart_items.push({title: item.title , quantity: item.quantity ,price: item.price});
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
  }]);
