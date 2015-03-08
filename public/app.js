var app = angular.module('myApp', ['angularMoment']);

app.controller( 'MainCtrl', function( $scope, $timeout, moment) {
  $scope.timeLeft;

  $scope.goToEp1 = function(){
    console.log('goToEp1');
  }

  $scope.onTimeout = function(){

      //if today is tuesday, adjust the moment's day value
      if (moment().day() === 3){
        //if the time is past the start time set it to next week
        if(moment().set({'hours': 10, 'minutes': 59, 'seconds': 00}) - moment() <= 0){
          nextShowing = moment().set({'day': '10', 'hours': 10, 'minutes': 59, 'seconds': 00});
        //otherwise set it to today
        } else{
          nextShowing = moment().set({'day': '3', 'hours': 10, 'minutes': 59, 'seconds': 00});
        }
      }

      var secondsLeft = Math.floor(nextShowing.diff(moment()) / 1000);

      $scope.timeLeft = secondsLeft;

    mytimeout = $timeout($scope.onTimeout,1000);
  }

  var mytimeout = $timeout($scope.onTimeout,1000);

});
