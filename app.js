var app = angular.module('myApp', ['angularMoment']);

app.controller( 'MainCtrl', function( $scope, $timeout, moment) {
  $scope.days = 0;
  $scope.date = new moment();

  console.log(moment("1982-5-25").countdown().toString());

  $scope.onTimeout = function(){
      $scope.counter++;
      mytimeout = $timeout($scope.onTimeout,1000);
  }
  var mytimeout = $timeout($scope.onTimeout,1000);

});


