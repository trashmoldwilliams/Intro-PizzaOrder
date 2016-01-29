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
  var pizzaPrice = this.size.price;
  for (var i = 0; i < this.toppings.length; i++) {
    pizzaPrice += this.toppings[i].price;
  }
  return pizzaPrice;
};

var constructAllToppings = function() {
  var pizzaToppings = [];
  for (var i = 1; i <= 3; i++) {
    var toppingName = $("input[name=option" + i + "]:checked", "form#pizzaBuilder").val();
    if (toppingName != undefined) {
      var toppingPrice = determineToppingPrice(toppingName);
      var currentTopping = new Topping(toppingName, toppingPrice);
      pizzaToppings.push(currentTopping);
    }
  }
  return pizzaToppings;
}

var determineToppingPrice = function(toppingName) {
  var toppingPrice = 0;
  if (toppingName === "olives"){
    toppingPrice = 1;
  } else if (toppingName === "pepperoni" || toppingName === "extraCheese") {
    toppingPrice = 2;
  }
  return toppingPrice;
}

$(document).ready(function() {
  event.preventDefault();

  $("form#pizzaBuilder").submit(function() {
    var pizzaSize = $("select#pizzaSizeInput").val()
    var pizzaToppings = constructAllToppings;
  });
});
