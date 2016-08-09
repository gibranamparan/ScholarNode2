(function () {

  angular.module('scholarNode.services', [])
  .factory('alumnoService', function (){

    getAlumnos = function() {
      io.socket.get('/Alumnos', function(data){
        return productos = data;
      })
    }

    return {
      getAlumnos: getAlumnos
    }
  });



})();


