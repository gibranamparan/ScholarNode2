(function () {

  angular.module('scholarNode.services', [])

    .factory('pagosService', ['$http', '$q', function ($http, $q) {

      function all() {
       /** $q es la libreria de las promesas, donde se crea una variable para resolver la promesa */
        var deferred = $q.defer();

        $http.get('/Pago')
          .success(function (data) {
            deferred.resolve(data);

         
          });

        return deferred.promise;
      }

      return {
        all: all
      };

    }]);

})();
