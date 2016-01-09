angular.module("caEditContactController", [])
  .controller("caEditContactController", ["$scope", "$routeParams", "$location",
    "$http",

    function($scope, $routeParams, $location, $http) {

      var contactId = $routeParams["id"]; //phone changed to id, this is that dynamic var we defined in app.js

      $http.get($scope.url, {
          params: {
            "id": contactId
          }
        })
        .success(function(resp) {
          $scope.contact = resp;
        });

      $scope.save = function() {

        var url = $scope.url + "?id=" + $routeParams["id"];

        var data = $scope.contact;

        $http.put(url, data)
          .success(function(resp) {});

        $location.path("/view-contacts");
      };

    }
  ]);
