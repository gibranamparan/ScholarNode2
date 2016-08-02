(function () {

  angular.module('scholarNode.services', [])
    .factory('alumnoService', ['$http', '$q', function ($htpp, $q){

      function allAlumnos() {
        var deferred = $q.defer();
        $http.get('http://localhost:1337/alumno')
          .success(function (data) {
            alert('hola');
           
            deferred.resolve(data);
          });
        return deferred.promise;  
      }

       return {
        allAlumnos: allAlumnos
   
      };
    }])
    .factory('pagoService', ['$http', '$q', function ($http, $q) {

      function allPagos() {
       /** $q es la libreria de las promesas, donde se crea una variable para resolver la promesa */
        var deferred = $q.defer();
        $http.get('/Pago')
          .success(function (data) {
            deferred.resolve(data);
          });
        return deferred.promise;
      }
      


      return {
        allPagos: allPagos
      };

    }])
    

})();
