function Calculator() {}
Calculator.prototype.init = function(num1, num2) {
  this.num1 = parseFloat(num1);
  this.num2 = parseFloat(num2);
};

Calculator.prototype.add = function() {
  return this.num1 + this.num2;
};

Calculator.prototype.subtract = function() {
  return this.num1 - this.num2;
};

Calculator.prototype.multiply = function() {
  return this.num1 * this.num2;
};

Calculator.prototype.divide = function() {
  return this.num1 / this.num2;
};
