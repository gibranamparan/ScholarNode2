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

    function buscadorAlumno (dato) {
      var deferred = $q.defer();
      getAlumnos().then(function (data) {
        var resultado = data.filter(function (alumno) {
          return alumno.nombre | alumno.apellidoPaterno | alumno.apellidoMaterno === data;

        });
        if(resultado.length > 0){
          deferred.resolve(alumno.data);
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }

    return {
      getAlumnos: getAlumnos,
      buscadorAlumno: buscadorAlumno
    }
  }]);



})();


