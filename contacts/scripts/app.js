/*
this info is the roting info
we are provising routing based on different url pattern if not we get a 404
*/
angular.module("ca", ["ngRoute", "caAddContactController"])
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
        template: "<h1>View all contacts</h1>"
      });
  }]);
