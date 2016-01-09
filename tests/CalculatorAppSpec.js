describe("Testing the calculator Angular App", function() {

  var $controller;
  var calculator;
  var $scope;

  //load module
  beforeEach(module("calci"));

  beforeEach(inject(function(_$controller_) {

    $controller = _$controller_;
  }));

  beforeEach(inject(function(_calculator_) {
    calculator = _calculator_;
  }))

  beforeEach(inject(function(_$rootScope_) {

    $scope = _$rootScope_;
  }));

  it("should check that $controller is defined", function() {
    expect($controller).toBeDefined();
  })

  it("should check that calculator is defined", function() {
    expect(calculator).toBeDefined();
  })

  it("should test $scope.add()", function() {

    //had changed that from $scope to scope
    /*var scope = {
      num1: 10,
      num2: 20
    }; */
    //  console.log(scope);

    var cc = $controller("calciController", {
      $scope: $scope,
      calculator: calculator
    });
    //  console.log(scope);

    $scope.num1 = 10;
    $scope.num2 = 20;
    $scope.add();
    expect($scope.result).toBe(30);
  })
});
