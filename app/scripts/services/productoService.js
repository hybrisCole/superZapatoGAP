'use strict';

angular.module('superZapatoGapApp')
  .factory('productoService',['localStorageService','$q','$timeout', function (localStorageService,$q,$timeout) {
    var productosKey = 'superZapatoObjects.PRODUCTOS',
    uuid = function () {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },
    s4 = function () {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    datosIniciales = [
      {
        "imagenesSlide":[
          {
            "path":"http://zapachic.com/wp-content/uploads/2013/01/bota-intro.jpg",
            "ultimo":false
          },
          {
            "path":"http://zapachic.com/wp-content/uploads/2013/01/bota-bloque-11.jpg",
            "ultimo":true
          }
        ],
        "nombre":"botas militares",
        "descripcion":"botas de cuero femeninas estilo militar",
        "precio":85,
        "cantidadEstante":5,
        "cantidadInventario":15,
        "imagenPrincipal":"http://zapachic.com/wp-content/uploads/2013/01/bota-bloque-11.jpg",
        "id":"0cc0459f-1a1e-dfb6-7367-a8cc4d2978c3"
      },
      {
        "imagenesSlide":[
          {
            "path":"http://static.dafiti.com.ar/p/g4-2974-75451-1-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/g4-2974-75451-3-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/g4-2974-75451-4-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/g4-2974-75451-6-product.jpg",
            "ultimo":true
          }
        ],
        "imagenPrincipal":"http://static.dafiti.com.ar/p/g4-2970-75451-1-product.jpg",
        "nombre":"Duncan Summer G4",
        "descripcion":"Zapatilla Azul G4 Duncan Summer. Es un modelo de cuero descarne con suela de goma. El interior está forrado en tela de poliéster y la plantilla es de goma eva. Una zapatilla urbana con un diseño original.",
        "precio":75,
        "cantidadEstante":2,
        "cantidadInventario":5,
        "id":"2f7ea75a-4bc0-fa70-8546-b5876165cb0d"
      },
      {
        "imagenesSlide":[
          {
            "path":"http://static.dafiti.com.ar/p/reebok-9326-59682-1-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/reebok-9326-59682-3-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/reebok-9326-59682-4-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/reebok-9326-59682-6-product.jpg",
            "ultimo":true
          }
        ],
        "nombre":"Reebok Sparkle Heel",
        "descripcion":"Zapatilla Sparkle Heel de Reebok confeccionada en sintético. Es un modelo acordonado, con suela de goma que posee amortiguación en el talón posibilitada por cámara de aire. El interior es acolchonado, y se encuentra forrado en poliéster azul. Un diseño cómodo, tecnológicamente pensado para correr.",
        "precio":65,
        "cantidadEstante":2,
        "cantidadInventario":6,
        "imagenPrincipal":"http://static.dafiti.com.ar/p/reebok-9322-59682-1-product.jpg",
        "id":"da6a35b6-93f4-bbae-320d-13d1b1032549"
      },
      {
        "imagenesSlide":[
          {
            "path":"http://static.dafiti.com.ar/p/gotardo-4151-81482-1-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/gotardo-4151-81482-3-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/gotardo-4151-81482-5-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/gotardo-4151-81482-4-product.jpg",
            "ultimo":true
          }
        ],
        "imagenPrincipal":"http://static.dafiti.com.ar/p/gotardo-4148-81482-1-product.jpg",
        "nombre":"Gotardo Abotinado",
        "descripcion":"Zapato Abotinado de Gotardo en cuero. Es un modelo con capellada raspada, logrando un acabado desgastado. La suela es de goma y el interior de cuero. Un diseño elegante y moderno para lucir con jeans.",
        "precio":125,
        "cantidadEstante":2,
        "cantidadInventario":7,
        "id":"02420fb8-924a-c5f9-5772-70045410532b"
      },
      {
        "imagenesSlide":[
          {
            "path":"http://static.dafiti.com.ar/p/blood-south-3502-4799-1-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/blood-south-3502-4799-2-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/blood-south-3502-4799-4-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/blood-south-3502-4799-6-product.jpg",
            "ultimo":true
          }
        ],
        "nombre":"Sandalia Ojota",
        "descripcion":"Sandalia Ojota de Blood South en cuero ecológico negro. Es un modelo con suela de goma cuya capellada es de cuero y posee recortes.",
        "precio":55,
        "cantidadEstante":5,
        "cantidadInventario":10,
        "imagenPrincipal":"http://static.dafiti.com.ar/p/blood-south-3498-4799-1-product.jpg",
        "id":"837350f0-c65e-1547-45c4-5bac7f588816"
      },
      {
        "imagenesSlide":[
          {
            "path":"http://static.dafiti.com.ar/p/coca-cola-2863-69943-1-product.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/coca-cola-2869-69943-4-zoom.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/coca-cola-2869-69943-2-zoom.jpg",
            "ultimo":false
          },
          {
            "path":"http://static.dafiti.com.ar/p/coca-cola-2871-69943-5-product.jpg",
            "ultimo":true
          }
        ],
        "nombre":"Coca Cola Vulcan",
        "descripcion":"Interior forrado en tela. Suela de goma.",
        "precio":200,
        "cantidadEstante":3,
        "cantidadInventario":5,
        "imagenPrincipal":"http://static.dafiti.com.ar/p/coca-cola-2863-69943-1-product.jpg",
        "id":"65dd3aec-c023-797a-ead1-2e61d33fad1d"
      }
    ];

    return {
      guardar: function (producto) {
        var defer = $q.defer();
        producto.id = uuid();
        localStorageService.buscar(productosKey).then(function(productos){
          if(!productos){
            productos = {key:productosKey,data:[]};
          }
          productos.data.push(producto);
          productos.key = productosKey;
          localStorageService.salvar(productos).then(function(productoRespuesta){
            defer.resolve(productoRespuesta);
          });
        });
        return defer.promise;
      },
      listado: function(){
        var defer = $q.defer();
        localStorageService.buscar(productosKey).then(function(productos){
          productos = productos || {data:[]};
          defer.resolve(productos.data);
        });
        return defer.promise;
      },
      cargar: function(){
        var that = this;
        this.listado().then(function(data){
          if(data.length === 0){
            _.each(datosIniciales,function(datoProducto,index){
              $timeout(function(){
                that.guardar(datoProducto);
              },index * 5000);
            });
          }
        });
      }
    };
  }]);
