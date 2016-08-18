(function () {

  angular.module('scholarNode.services', [])
  .factory('alumnoService', ['$http', '$q', function ($http, $q){

     function getAlumnos () {
      var defer = $q.defer();
       
      $http.get('/alumno').then(function(response) {
        
        defer.resolve(response.data);
      }, function(response) {
        
        defer.reject(response);
      });

      return defer.promise;
    }

    function showAlumno (id) {
      var defer = $q.defer();
    
      $http.get('/alumno/show/:id').then(function(response) {
        alert('Exito')
        defer.resolve(response.data);
      }, function(response) {
        alert('Error');
        defer.reject(response);
      });
      
      return defer.promise;

    }

    return {
      getAlumnos: getAlumnos,
      showAlumno: showAlumno
    }
  }]);



})();


