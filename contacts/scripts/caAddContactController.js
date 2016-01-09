angular.module("caAddContactController", [])
  .controller("caAddContactController", ["$scope", function($scope) {

    $scope.contact = {};
    $scope.save = function() {
      console.log("Adding contact...");
      //assuming the contact object is a valid one
      debugger;
      //if ($scope.contact.firstname) return;
      $scope.$parent.contacts.push($scope.contact);
      console.log("Here", $scope.$parent.contacts);
      $scope.contact = {};
    };
  }]);
