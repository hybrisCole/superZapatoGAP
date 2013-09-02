'use strict';

angular.module('superZapatoGapApp', [])
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
      .otherwise({
        redirectTo: '/'
      });
  });
