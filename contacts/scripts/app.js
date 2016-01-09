/*
this info is the roting info
we are provising routing based on different url pattern if not we get a 404

Here we have :phone, this :phone is dynamic variable
*/
angular.module("ca", ["ngRoute", "caAddContactController",
    "caViewContactsController", "caEditContactController"
  ])
  .filter("age", function() {

    return function(dob) {

      dob = new Date(dob);

      debugger;
      var ageDiffMs = Date.now() - dob.getTime();
      var ageDate = new Date(ageDiffMs);

      return Math.abs(ageDate.getUTCFullYear() - 1970) + " years ," +
        ageDate.getMonth() + " months and " + ageDate.getDate() + " days.";
    }
  })
  .filter("trim", [function() {
    //function trim(source,num)

    return function(source, num) {
      num = num || 4; //default

      return source.substring(0, num);
    }
  }])
  .filter("phone", [function() {

    return function(phone) {
      var part1, part2, part3;

      part1 = phone.substring(0, 3);
      part2 = phone.substring(3, 6);
      part3 = phone.substring(6);

      return "(" + part1 + ")" + part2 + "-" + part3;
    }
  }])
  .controller("main", ["$scope", function($scope) {

    $scope.contacts = []; //share across all the controllers for the view
    $scope.contacts.push({
      firstname: "Vinod",
      lastname: "Kumar",
      city: "Bangalore",
      phone: "9731424784",
      email: "vinod@vinod.co"
    });
    $scope.contacts.push({
      firstname: "John",
      lastname: "Doe",
      city: "Dallas",
      phone: "5558383221",
      email: "johndoe@mailinator.com"
    });
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
      .when("/edit/:phone", {
        templateUrl: "partials/contact-form.html",
        controller: "caEditContactController"
      });
  }]);
