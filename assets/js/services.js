(function () {

  angular.module('scholarNode.services', [])
  .factory('alumnoService', ['$http', '$q', function ($htpp, $q){

    var getAlumnos = function() {
      var defer = $q.defer();

      $http.get('/alumno').then(function(response) {
        defer.resolve(response.data);
      }, function(response) {
        defer.reject(response);
      });

      return defer.promise;
    };

    return {
      getAlumnos: getAlumnos
    }
  }]);



})();


