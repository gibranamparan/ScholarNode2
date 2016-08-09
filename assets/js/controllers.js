
(function () {
	'use strict';
	angular.module('scholarNode.controllers', [])
	.controller('AlumnoController', ['$scope', 'alumnoService', function ($scope, alumnoService) {
		

		alumnoService.getAlumnos().then(function(data) {
			$scope.alumnos = data;
		})

	}])                                                         
	.controller('PagoController', ['$scope', 'pagoService', function ($scope, pagoService) {

		pagoService.allPagos().then(function (data) {
			$scope.pagos = data;

		});

	}])






})();
