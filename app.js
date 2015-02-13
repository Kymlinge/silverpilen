var app = angular.module('myApp', ['angularMoment']);

app.controller( 'MainCtrl', function( $scope, $timeout, moment) {
  $scope.timeLeft;
  nextShowing = moment().set({'day': 14, 'hour': 1, 'minute': 13});

  $scope.onTimeout = function(){
    (function() {
      var ms = nextShowing.diff(moment());
      var d = moment.duration(ms);
      var s = Math.floor(d.asDays()) + moment.utc(ms).format(":h:mm:ss");

      $scope.timeLeft = s;
    }());

    mytimeout = $timeout($scope.onTimeout,1000);
  }

  var mytimeout = $timeout($scope.onTimeout,1000);

});
