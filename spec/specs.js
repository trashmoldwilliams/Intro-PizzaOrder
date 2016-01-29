describe('Topping', function() {
  it("will construct a new topping with the given properties", function() {
    var testTopping = new Topping("Pepperoni", 2);
    expect(testTopping.name).to.equal("Pepperoni");
    expect(testTopping.price).to.equal(2);
  });
});

describe('Size', function() {
  it("will construct a new size with the given properties", function() {
    var testSize = new Size("Large", 10);
    expect(testSize.name).to.equal("Large");
    expect(testSize.price).to.equal(10);
  });
});

describe('Pizza', function() {
  it("will construct a new pizza with the given properties", function() {
    var testTopping1 = new Topping("Pepperoni", 2);
    var testTopping2 = new Topping("Olives", 1);
    var testPizza = new Pizza([testTopping1, testTopping2], "large");
    expect(testPizza.toppings).to.eql([testTopping1, testTopping2]);
    expect(testPizza.size).to.equal("large");
  });

  it("calculates pizza price based on size and toppings", function() {
    var testTopping1 = new Topping("Pepperoni", 2);
    var testTopping2 = new Topping("Olives", 1);
    var testSize = new Size("large", 10);
    var testPizza = new Pizza([testTopping1, testTopping2], testSize);
    expect(testPizza.determinePizzaPrice()).to.equal(13);
});
});
