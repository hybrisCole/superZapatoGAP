'use strict';

angular.module('superZapatoGapApp')
  .factory('localStorageService', ['$q',function($q) {
    var lawnChairStore = Lawnchair({
        adapters: ['dom'],
        name: 'superZapatoObjects',
        record: 'superZapatoObject'
      }, function (e) {
        console.info('localStorageService: storage ready');
      }),

      offlineManager = {
        salvar: function (object) {
          var deferredObj = $q.defer();
          lawnChairStore.save(object, function (record) {
            deferredObj.resolve(record);
          });
          return deferredObj.promise;
        },
        buscar: function (key) {
          var deferredObj = $q.defer();
          lawnChairStore.get(key, function (doc) {
            deferredObj.resolve(doc);
          });
          return deferredObj.promise;
        },
        remover: function (key) {
          var deferredObj = $q.defer();
          lawnChairStore.remove(key, function (data) {
            deferredObj.resolve();
          });
          return deferredObj.promise;
        }
      };

    return offlineManager;
  }]);
