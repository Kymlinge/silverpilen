var app = angular.module('myApp', ['angularMoment']);

app.controller( 'MainCtrl', function( $scope, $timeout, moment) {
  $scope.timeLeft;

  $scope.portalOpen = false;

  $scope.goToEp1 = function(){
    console.log('goToEp1');
  }

  $scope.goToEp2 = function(){
    console.log('goToEp2');
  }

  $scope.onTimeout = function(){
    nextShowing = moment().set({'day': '0', 'hours': 21, 'minutes': 00, 'seconds': 00});

    if(moment().isAfter(nextShowing)){
      $scope.portalOpen = true;
    }

    var secondsLeft = Math.floor(nextShowing.diff(moment()) / 1000);

    $scope.timeLeft = secondsLeft;

    mytimeout = $timeout($scope.onTimeout,1000);

  }

  var mytimeout = $timeout($scope.onTimeout,1000);

});
