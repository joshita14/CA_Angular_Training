/*
http: an object or a function
*/
angular.module("caViewContactsController", [])
  .controller("caViewContactsController", ["$scope", "$http", function($scope,
    $http) {

    var promise = $http.get($scope.url); //return is a promise, its not fullfilled but some response
    promise.success(function(resp) {
      $scope.contacts = resp; //array of contacts
    }); //in case of success
    promise.error(function(resp) {
      console.error(resp);

    }); //if response of a promise is error return this

    $scope.editingRow = -1;
    $scope.inlineEdit = function(index) {
      //  console.log("HERERRERRE", index);
      $scope.editingRow = index;
    };

    $scope.doneEditing = function() {
      $scope.editingRow = -1;
    };

    $scope.sortKeys = "firstname";
    $scope.sortBy = function(sortKey) {
      $scope.sortKeys = sortKey;
    }

    $scope.dt = new Date();

    $scope.delete = function(contact) {
      var url = $scope.url;
      $http.delete(url, {
        params: {
          id: contact.id
        }
      }).success(function(resp) {
        console.log(resp);
        var index = $scope.contacts.indexOf(contact);
        $scope.contacts.splice(index, 1);
      })
    };

  }]);
