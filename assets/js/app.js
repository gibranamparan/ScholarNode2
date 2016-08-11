(function () {
  'use strict';
  angular.module('scholarNode', [
    'ngRoute',  
    'scholarNode.controllers',
    'scholarNode.directives',
    'scholarNode.filters',
    'scholarNode.services'
    ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

   $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
   $routeProvider
   .when('/', {
    templateUrl: "/templates/homepage.html"
  }) 
   .when('/alumnos/index', {
    controller: "AlumnoController",
    templateUrl: "/templates/Alumno/listado.html"
  }) 
   .otherwise({ 
    redirectTo: "/"
  });

 }])




})();
