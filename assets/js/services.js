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

    function createAlumno(alumno){
      var defer = $q.defer();
      var url= '/alumno/create?'+alumno;
      $http.post(url).then(function(response){
        alert('Exito Services');
        defer.resolve(response.data);
      }, function(response) {
        alert('Error Services')
        defer.reject(response);
      })
      return defer.promise;
    }

    function showAlumno (id) {
      alert('id inservices: '+id);
      var defer = $q.defer();
    
      $http({ 
        url:'/alumno/show/',
        params:{id:id},
        method:'get'
        }).then(function(response) {
        alert('Exito');
        defer.resolve(response.data);
      }, function(response) {
        alert('Error');
        defer.reject(response);
      });
      
      return defer.promise;

    }

    function updateAlumno(alumno){
      var defer = $q.defer();
      var url= '/alumno/update/'+alumno;
      $http.post(url).then(function(response) {
        alert('Exito');
        defer.resolve(response.data);
      }, function(response){
        alert('Error')
        defer.reject(response);
      })

      return defer.promise;
    }

    function deleteAlumno(id){
      var defer = $q.defer();
      var url= '/alumno/destroy/'+id;
      $http.get(url).then(function(response){
        alert('Exito Services');
        defer.resolve(response);
      }, function(response) {
        alert('Error Services')
        defer.reject(response);
      })
      return defer.promise;
    }

    return {
      getAlumnos: getAlumnos,
      createAlumno: createAlumno,
      showAlumno: showAlumno,
      updateAlumno: updateAlumno,
      deleteAlumno: deleteAlumno
    };
  }]);
})();


