angular.module("calci", [])

.service("calculator", [function() {

    //constructor for calculator

    return new Calculator();
  }])
  .controller("calciController", ["$scope", "calculator", function($scope,
    calculator) {

    $scope.add = function() {
      calculator.init($scope.num1, $scope.num2);
      $scope.result = calculator.add();
    };

    $scope.subtract = function() {
      calculator.init($scope.num1, $scope.num2);
      $scope.result = calculator.subtract();
    };

    $scope.divide = function() {
      calculator.init($scope.num1, $scope.num2);
      $scope.result = calculator.divide();
    };

    $scope.multiply = function() {
      calculator.init($scope.num1, $scope.num2);
      $scope.result = calculator.multiply();
    };

  }]);
