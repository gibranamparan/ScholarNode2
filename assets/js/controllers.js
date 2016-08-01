
(function () {
'use strict';
  angular.module('scholarNode.controllers', [])
                                                                      
  .controller('PagoController', ['$scope', 'pagosService', function ($scope, pagosService) {
  	
       pagosService.all().then(function (data) {
        $scope.pagos = data;
             
      });
     
    }])

    

  

})();
