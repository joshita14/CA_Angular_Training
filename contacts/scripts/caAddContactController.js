angular.module("caAddContactController", [])
  .controller("caAddContactController", ["$scope", function($scope) {

    $scope.contact = {};
    $scope.save = function() {
      console.log("Adding contact...");
    }
  }]);
