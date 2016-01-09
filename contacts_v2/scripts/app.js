/*
this info is the roting info
we are provising routing based on different url pattern if not we get a 404

Here we have :phone, this :phone is dynamic variable
*/
angular.module("ca", ["ngRoute", "caAddContactController",
    "caViewContactsController", "caEditContactController"
  ])
  .controller("main", ["$scope", function($scope) {

    $scope.url = "http://vinod.co/rest/contacts.php"; //provides view to all the controller
    //$scope.contacts = []; //share across all the controllers for the view
  }])
  .config(["$routeProvider", function($routeProvider) {

    $routeProvider
      .when("/", {
        template: "<h1>Welcome to contacts app</h1>"
      })
      .when("/add-contact", {
        templateUrl: "partials/contact-form.html",
        controller: "caAddContactController"
      })
      .when("/view-contacts", {
        templateUrl: "partials/view-contacts.html",
        controller: "caViewContactsController"
      })
      .when("/edit/:id", {
        templateUrl: "partials/contact-form.html",
        controller: "caEditContactController"
      }); //phone is replaced with id as per database
  }]);
