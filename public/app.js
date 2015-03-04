var app = angular.module('myApp', ['angularMoment']);

app.controller( 'MainCtrl', function( $scope, $timeout, moment) {
  $scope.timeLeft;
  nextShowing = moment().weekday(1).hour(2).minute(35);

  $scope.onTimeout = function(){
    (function() {
      // nextShowing = moment().weekday(1).hour(2).minute(15);
      var ms = nextShowing.diff(moment());
      var d = moment.duration(ms);
      var s = Math.floor(d.asDays()) + moment.utc(ms).format(":hh:mm:ss");

      $scope.timeLeft = s;
    }());

    mytimeout = $timeout($scope.onTimeout,1000);
  }

  var mytimeout = $timeout($scope.onTimeout,1000);

});
