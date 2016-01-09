angular.module("caViewContactsController", [])
  .controller("caViewContactsController", ["$scope", function($scope) {

    $scope.editingRow = -1;
    $scope.inlineEdit = function(index) {
      console.log("HERERRERRE", index);
      $scope.editingRow = index;
    };

    $scope.doneEditing = function() {
      $scope.editingRow = -1;
    };

    $scope.sortKeys = "firstname";
    $scope.sortBy = function(sortKey) {
      $scope.sortKeys = sortKey;
    }

    $scope.dt = new Date(1970, 0, 20);
  }]);
