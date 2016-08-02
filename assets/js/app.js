(function () {
  'use strict';
  var app = angular.module('scholarNode', [
   /** 'ngRoute',  */
    'scholarNode.controllers',
    'scholarNode.directives',
    'scholarNode.filters',
    'scholarNode.services'
  ])
  /**
  app.config(['$routeProvider', function ($routeProvider) {


      $routeProvider 
        .when('/', {
          templateUrl: '/views/homepage'
        })
        .when('/Pago', {
          templateUrl: '/views/Pago/index',
          controller: 'PagoController'
        })
        .otherwise({ 
          redirectTo: '/'
        });

    }]);
    */

})();
