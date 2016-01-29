function Topping(name, price) {
  this.name = name;
  this.price = price;
}

function Size(name, price) {
  this.name = name;
  this.price = price;
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.determinePizzaPrice = function () {
  var pizzaPrice = 0;
  return pizzaPrice += this.size.price;
  // for (var i = 0; i < this.toppings.length; i++) {
  //   pizzaPrice += this.toppings[i].price;
  // }
};
