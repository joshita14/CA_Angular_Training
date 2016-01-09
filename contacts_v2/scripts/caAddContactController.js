angular.module("caAddContactController", [])
  .controller("caAddContactController", ["$scope", "$http", "$timeout",
    function($scope, $http, $timeout) {

      $scope.contact = {};
      $scope.save = function() {
        $http.post($scope.url, $scope.contact)
          .success(function(resp) {
            console.log("Updated contact");

            $scope.message = "Contact added with id " + resp.id;

            $scope.contact = {};

            $scope.f1.$setPristine();

            $timeout(function() {
              delete $scope.message;
            }, 3000);

          })
          .error(function(resp) {
            console.log("error");
          });
      };
    }
  ]);
