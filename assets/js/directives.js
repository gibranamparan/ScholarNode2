(function () {

	angular.module('scholarNode.directives', [])

	   .directive('listAlumnos', function () {
        return {
        restrict: 'E',
        templateUrl: '/partials/Alumno/listAlumnos.html'
      };
    })
	   .directive('mostrarAlumno', function () {
	   	return{
	   		restrict: 'E',
	   		templateUrl: '/partials/Alumno/show.html'
	   	};
	   })

})();


  

