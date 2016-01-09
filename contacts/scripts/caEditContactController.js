angular.module("caEditContactController", [])
  .controller("caEditContactController", ["$scope", "$routeParams", "$location",
    function($scope, $routeParams, $location) {

      var phone = $routeParams["phone"]; //this is that dynamic var we defined in app.js
      console.log("Test hhhh  here", $routeParams);
      for (var i = 0; i < $scope.contacts.length; i++) {

        var c = $scope.contacts[i];
        if (c.phone === phone) {
          //wrong sol,
          //$scope.contact = c;
          console.log("Test");
          var c1 = {};
          for (var prop in c) {
            c1[prop] = c[prop];
          }
          $scope.contact = c1; //updating the value here
          break;
        }
      }

      $scope.edit = true;

      $scope.save = function() {

        //replace contacts elements with contacts
        for (var i = 0; i < $scope.contacts.length; i++) {
          var c = $scope.contacts[i];
          if (c.phone === phone) {
            $scope.$parent.contacts[i] = $scope.contact;
          }
        }
        $location.path("/view-contacts");
      };

    }

  ]);
