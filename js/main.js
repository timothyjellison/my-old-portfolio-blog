(function(){
  var app = angular.module("myApp", ['ngSanitize']);
  app.controller("myController", ['$scope', '$http', function ($scope, $http) {
    
    $scope.search = function(searchTerm){
      $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + searchTerm + '&format=json&callback=JSON_CALLBACK').then(function successfulCallback(response){
        $scope.data = response.data.query.search;
        $scope.quantity = 1;

      }, function errorCallback(response){
        $('.debug').text("error");
      });
    };
  }]);
})();
