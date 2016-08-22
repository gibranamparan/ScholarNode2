
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
	.controller('AlumnoCreateController', ['$scope','alumnoService', function($scope, alumnoService){
		


		    $scope.save = function() {
		    var alumno = 
			  'nombre='+$scope.form.nombre+'&'+
		      'apellidoPaterno='+$scope.form.apellidoPaterno+'&'+
		      'apellidoMaterno='+$scope.form.apellidoMaterno+'&'+
		      'fechaNacimiento='+$scope.form.fechaNacimiento+'&'+
		      'numeroHijos='+$scope.form.numeroHijos+'&'+
		      'sexo='+$scope.form.sexo+'&'+
		      'estadoCivil='+$scope.form.estadoCivil+'&'+
		      'padreTutor='+$scope.form.padreTutor+'&'+
		      'rfc='+$scope.form.rfc+'&'+
		      'curp='+$scope.form.curp+'&'+
		      'etnia='+$scope.form.etnia+'&'+
		      'empresa='+$scope.form.empresa+'&'+
		      'numDependientes='+$scope.form.numDependientes+'&'+
		      'domicilio='+$scope.form.domicilio+'&'+
		      'email='+$scope.form.email+'&'+
		      'inscrito='+$scope.form.inscrito
			
			alert(alumno);
			$scope.answer = alumnoService.createAlumno(alumno).then(function(data){
				alert(data);
			}, function() {
				alert('Error al crear al alumno');
			});
		}
	   
		
		
	}])
	.controller('AlumnoShowController', ['$scope', '$routeParams', 'alumnoService', function ($scope, $routeParams, alumnoService) {
		var id = $routeParams.id;
		
		alumnoService.showAlumno(id).then(function(data) {		
			$scope.alumno = data;

	}, function() {
		var mensaje='unable to get the alumno';
		alert(mensaje);
		$scope.error = mensaje;
	});
	}])       
	.controller('AlumnoEditController', ['$scope', '$routeParams', 'alumnoService', function ($scope, $routeParams, alumnoService) {
		var id = $routeParams.id;
		alumnoService.showAlumno(id).then(function(data) {
			$scope.alumno = data;

		}, function() {
			var mensaje='unable to get the alumno';
			alert(mensaje);
			$scope.error = mensaje;
		}),

		$scope.save = function(){

		    var alumno = 
		      $scope.alumno.Alumno.id+'?'+
			  'nombre='+$scope.alumno.Alumno.nombre+'&'+
		      'apellidoPaterno='+$scope.alumno.Alumno.apellidoPaterno+'&'+
		      'apellidoMaterno='+$scope.alumno.Alumno.apellidoMaterno+'&'+
		      'fechaNacimiento='+$scope.alumno.Alumno.fechaNacimiento+'&'+
		      'numeroHijos='+$scope.alumno.Alumno.numeroHijos+'&'+
		      'sexo='+$scope.alumno.Alumno.sexo+'&'+
		      'estadoCivil='+$scope.alumno.Alumno.estadoCivil+'&'+
		      'padreTutor='+$scope.alumno.Alumno.padreTutor+'&'+
		      'rfc='+$scope.alumno.Alumno.rfc+'&'+
		      'curp='+$scope.alumno.Alumno.curp+'&'+
		      'etnia='+$scope.alumno.Alumno.etnia+'&'+
		      'empresa='+$scope.alumno.Alumno.empresa+'&'+
		      'numDependientes='+$scope.alumno.Alumno.numDependientes+'&'+
		      'domicilio='+$scope.alumno.Alumno.domicilio+'&'+
		      'email='+$scope.alumno.Alumno.email+'&'+
		      'inscrito='+$scope.alumno.Alumno.inscrito


			$scope.answer = alumnoService.updateAlumno(alumno).then(function (data){
				var mensaje = 'Modificacion exitosa del alumno: '+$scope.alumno.Alumno.nombre;
				alert(mensaje);
				$scope.exito = mensaje;
			}, function(data){
				var mensaje = 'Error al querrer modificar al alumno:'+ $scope.alumno.Alumno.nombre;
				alert(mensaje);
				$scope.exito = mensaje;
			})
		}

	}])    
	.controller('AlumnoDeleteController', ['$scope', '$routeParams', 'alumnoService', function ($scope, $routeParams, alumnoService) {
		var id = $routeParams.id;
		alumnoService.deleteAlumno(id).then(function(data){
			var mensaje = 'Eliminacion exitosa del alumno';
			alert(mensaje);
			$scope.exito = mensaje;
		}, function(){
			var mensaje = 'Eliminacion no exitosa del alumno';
			alert(mensaje);
			$scope.exito = mensaje;
		})
	}])                          
	.controller('PagoController', ['$scope', 'pagoService', function ($scope, pagoService) {

		pagoService.allPagos().then(function (data) {
			$scope.pagos = data;

		});

	}]);
})();
