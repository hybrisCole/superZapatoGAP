'use strict';

angular.module('superZapatoGapApp', ['ui.bootstrap','wu.masonry'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/shoppingCart', {
        templateUrl: 'views/shoppingCart.html',
        controller: 'ShoppingcartCtrl'
      })
      .when('/productos', {
        templateUrl: 'views/productos.html',
        controller: 'ProductosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });