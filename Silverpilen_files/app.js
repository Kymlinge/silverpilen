var app = angular.module('myApp', []);

function indexCtrl($scope) {
  $scope.bdays = [{
          "name": "Jamal",
          "date": "Jan 1, 1980"
  }, {
          "name": "Paula",
          "date": "Jan 1, 2000"
  }, {
          "name": "Damon",
          "date": "Jun 30, 1800"
  }];

  $scope.newDate = function () {
      $scope.bdays.push({name:$scope.bdayname, date:$scope.bdaydate});
      $scope.bdayname = '';
      $scope.bdaydate = '';
  };
}
