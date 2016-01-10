(function(){
  var app = angular.module("myApp", []);
  app.controller("myController", ['$scope', '$http', function ($scope, $http) {
    $http
    .get('http://www.freecodecamp.com/news/hot')
    .success(function(data){
      $scope.stories = data; 
    });
  }]);
})();