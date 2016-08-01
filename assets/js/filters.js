
(function () {

  angular.module('scholarNode.filters', [])

    .filter('imageify', ['$filter', function ($filter) {
      return function (input) {
        var url = "img/pokemons/" + $filter('normalize')(input) + ".jpg";
        return url;
      };
    }]);

})();
