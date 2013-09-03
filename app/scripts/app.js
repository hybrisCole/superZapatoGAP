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
      .when('/productos', {
        templateUrl: 'views/productos.html',
        controller: 'ProductosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

$.each(data.photoset.photo, function(i,photo){ 

          var images ='<img src="http://farm5.static.flickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_m.jpg" class="box myphotos" rel="'+PS_ID+'" data-glisse-big="http://farm5.static.flickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_b.jpg" title="'+photo.title+'" />';

          $('#sets').append(images);  

          $('#sets').masonry({
            columnWidth: 300,
            itemSelector: '.box', 
            isAnimated: true,
            animationOptions: {
              duration: 1000,
              queue: false  
            }  
          }).imagesLoaded(function() {
            $('#sets').masonry('reload');
            });
      });