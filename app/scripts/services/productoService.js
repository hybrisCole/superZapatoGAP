'use strict';

angular.module('superZapatoGapApp')
  .factory('productoService',['localStorageService','$q', function (localStorageService,$q) {
    var productosKey = 'PRODUCTOS',
    uuid = function () {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },
    s4 = function () {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return {
      guardar: function (producto) {
        var defer = $q.defer();
        producto.id = uuid();
        localStorageService.buscar(productosKey).then(function(productos){
          if(!productos){
            productos = {key:productosKey,data:[]};
          }
          productos.data.push(producto);
          localStorageService.salvar(productos).then(function(){
            defer.resolve(producto);
          });
        });
        return defer.promise;
      },
      listado: function(){
        var defer = $q.defer();
        localStorageService.buscar(productosKey).then(function(productos){
          defer.resolve(productos.data);
        });
        return defer.promise;
      }
    };
  }]);
