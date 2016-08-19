
(function () {
	'use strict';
	angular.module('scholarNode.controllers', [])
	.controller('AlumnoListController', ['$scope', 'alumnoService', function ($scope, alumnoService) {
		
		alumnoService.getAlumnos().then(function(data) {
			
			$scope.alumnos = data;
		}, function() {
			$scope.error = 'unable to get the alumnos';
		});
	}])
	.controller('AlumnoShowController', function ($scope, $routeParams, alumnoService) {
		var id = $routeParams.id;
		alumnoService.showAlumno(id).then(function(data) {
			alert(data);
			$scope.alumno = data;
			
		}, function() {
			var mensaje='unable to get the alumno';
			alert(mensaje);
			$scope.error = mensaje;
		});
	})                                     
	.controller('PagoController', ['$scope', 'pagoService', function ($scope, pagoService) {

		pagoService.allPagos().then(function (data) {
			$scope.pagos = data;

		});

	}]);
})();
