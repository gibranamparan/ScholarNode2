
(function () {
'use strict';
  angular.module('scholarNode.controllers', [])
  .controller('AlumnoController', ['$scope', 'alumnoService', function ($scope, alumnoService) {

  		alumnoService.allAlumnos().then(function (data) {
  			alert('hola');
  			$scope.alumnos = data;
  		})


  }])                                                         
  .controller('PagoController', ['$scope', 'pagoService', function ($scope, pagoService) {
  	
    	pagoService.allPagos().then(function (data) {
       		$scope.pagos = data;
             
      });
     
    }])


    

  

})();
