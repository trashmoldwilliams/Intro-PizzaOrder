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
}

Pizza.prototype.determinePizzaPrice = function () {
  var pizzaPrice = this.size.price;
  for (var i = 0; i < this.toppings.length; i++) {
    pizzaPrice += this.toppings[i].price;
  }
  return pizzaPrice;
};

var determineToppingPrice = function(toppingName) {
  var toppingPrice = 0;
  if (toppingName === "olives" || toppingName === "onions" || toppingName === "redPeppers" || toppingName === "spinach"){
    toppingPrice = 1;
  } else if (toppingName === "mushrooms" || toppingName === "bacon" || toppingName === "beef" || toppingName === "ham" || toppingName === "pepperoni" || toppingName === "sausage") {
    toppingPrice = 2;
  } else if (toppingName === "artichokeHearts" || toppingName === "roastedEggplant" || toppingName === "roastedGarlic" || toppingName === "bbqChicken" || toppingName === "anchovies" || toppingName === "shrimp" || toppingName === "squid" || toppingName === "tuna") {
    toppingPrice = 3;
  } else if (toppingName === "oysters" || toppingName === "salmon") {
    toppingPrice = 4;
  } else if (toppingName === "lobster") {
    toppingPrice = 5;
  }
  return toppingPrice;
}

var determineSizePrice = function(sizeName) {
  if (sizeName === "extraSmall"){
    var sizePrice = 3;
  } else if (sizeName === "small"){
    var sizePrice = 5;
  } else if (sizeName === "medium"){
    var sizePrice = 7;
  } else if (sizeName === "large"){
    var sizePrice = 10;
  } else if (sizeName === "extraLarge"){
    var sizePrice = 15;
  }
  return sizePrice;
}

$(document).ready(function() {

  $("form#pizzaBuilder").submit(function() {
    event.preventDefault();
    var sizeName = $("select#pizzaSizeInput").val()
    var sizePrice = determineSizePrice(sizeName);
    var currentSize = new Size(sizeName, sizePrice);

    var pizzaToppings = [];
    for (var i = 1; i < 22; i++) {
      var toppingName = $("input[name=option" + i + "]:checked", "form#pizzaBuilder").val();
      if (toppingName != undefined) {
        var toppingPrice = determineToppingPrice(toppingName);
        var currentTopping = new Topping(toppingName, toppingPrice);
        pizzaToppings.push(currentTopping)
      }
    }

    var currentPizza = new Pizza(pizzaToppings, currentSize);
    var currentPizzaPrice = currentPizza.determinePizzaPrice();

    $("span#displayPizzaPrice").text(currentPizzaPrice);
    $("div#priceDisplayContainer").show();
  });
});
