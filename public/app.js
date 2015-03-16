var app = angular.module('myApp', ['angularMoment', 'ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl : 'views/index.html',
    controller: 'MainCtrl'
  })
  .when('/ep1', {
    templateUrl : 'views/episode1.html',
    controller: 'MainCtrl'
  })
  .when('/ep2', {
    templateUrl : 'views/episode2.html',
    controller: 'MainCtrl'
  });

  $locationProvider.html5Mode(true);
})

app.controller( 'MainCtrl', function( $scope, $timeout, moment, $location, $route) {
  $scope.timeLeft;

  $scope.portalOpen = false;

  $scope.go = function ( path ) {
    $location.path( path );
    $route.reload();
  };

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
