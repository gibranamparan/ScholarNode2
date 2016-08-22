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

   /**$locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });*/
   $routeProvider
   .when('/', {
    templateUrl: "/templates/homepage.html"
  }) 
   .when('/alumno/index', {
    controller: "AlumnoListController",
    templateUrl: "/templates/Alumno/index.html"
  })
   .when('/alumno/create', {
    controller: "AlumnoCreateController",
    templateUrl: "/templates/Alumno/new.html"
   })
   .when('/alumno/show/:id', {
    controller: "AlumnoShowController",
    templateUrl: "/templates/Alumno/show.html"
   })
   .when('/alumno/edit/:id', {
    controller: 'AlumnoEditController',
    templateUrl: '/templates/Alumno/edit.html'
   })
   .when('/alumno/destroy/:id', {
    controller: 'AlumnoDeleteController',
    templateUrl: "/templates/Alumno/delete.html"

   })
   .otherwise({ 
    redirectTo: "/"
  });

 }])




})();
