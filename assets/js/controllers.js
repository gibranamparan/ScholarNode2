
(function () {
	'use strict';
	angular.module('scholarNode.controllers', [])
	.controller('AlumnoController', ['$scope', function ($scope) {

		getAlumnos();
	    function getAlumnos(){
		io.socket.get('/Alumno', function(data){

			$scope.alumnos = data;
			$scope.$apply();
			
		});
	}
			
		

	}])                                                         
	.controller('PagoController', ['$scope', 'pagoService', function ($scope, pagoService) {

		pagoService.allPagos().then(function (data) {
			$scope.pagos = data;

		});

	}])






})();
