(function () {

	angular.module('scholarNode.directives', [])

	   .directive('listAlumnos', function () {
        return {
        restrict: 'E',
        templateUrl: '/partials/Alumno/listAlumnos.html'
      };
    })
})();


  

