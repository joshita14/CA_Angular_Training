/*
  Factory for product objects
*/

function createProduct(config) {

  var _name, _price;
  //constructor for product
  //constructor
  var Product = function(config) {
    //if no value then an empty object
    config = config || {} || "";

    //  if (!config.name) {
    //  throw "Mandatory Input Name, Please Enter A Value";
    //  }

    this.name = config.name || "";
    this.price = config.price || 0;
    this.description = config.description || "";
  };

  Product.prototype.log = function() {
    // body...
    console.log(JSON.stringify(this))
  };

  //Setter and getter
  Product.prototype.setName = function(name) {
    // body...
    debugger;
    _name = name;
  };

  Product.prototype.setPrice = function(price) {
    // body...
    _price = price;
  };

  Product.prototype.getName = function() {
    // body...
    return _name;
  };

  Product.prototype.getPrice = function() {
    // body...
    return _price;
  };

  var obj = new Product(config);
  return obj;
};

var para1 = new createProduct({
  name: "chai"
})
