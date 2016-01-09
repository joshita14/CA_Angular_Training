String.prototype.reverse = function() {

  var val = this.toString();
  var rev = "";
  for (var i = val.length - 1; i >= 0; i--) {
    rev += val.charAt(i);
  }
  return rev;
}

//Defining a constructor
//always use first capital letter for constructror
//No difference b/w const and function
function Person(name, city, country) {

  this.name = name;
  this.city = city;
  this.country = country;
  //debugger;

  //add show to the class of which person is a constructor
  Person.prototype.show = function() {
    console.log(this.name + " : " + this.city);
  };
  return (this.name + " " + this.city + " " + this.country);
}

var p1 = new Person("Joshita");
var p2 = new Person("Mishra");

//constructor
var Product = function(config) {
  //if no value then an empty object
  config = config || {} || "";

  if (!config.name) {
    throw "Mandatory Input Name, Please Enter A Value";
  }

  this.name = config.name;
  this.price = config.price || 0;
  this.description = config.description || "";
};

Product.prototype.log = function() {
  // body...
  console.log(JSON.stringify(this))
};

//supplying inputs to the Product constructor
var para1 = new Product({
  name: "Dell Laptop"
});

var para2 = new Product({
  description: "3GB Ram,3GHz",
  price: "43k",
  name: "Lenovo 365",
  id: 1234 //Ignored by product constructor
});
