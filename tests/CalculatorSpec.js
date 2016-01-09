describe("Testing Calculator service", function() {

  var calci;

  beforeEach(function() {
    calci = new Calculator();
  });
  it(
    "should add 10 = 20",
    function() {
      calci.init(10, 20);
      expect(calci.add()).toBe(30);
    });

  it(
    "should check - * / ",
    function() {
      calci.init(20, 10);
      expect(calci.subtract()).toBe(10);
      expect(calci.multiply()).toBe(200);
      expect(calci.divide()).toBe(2);

    });

  it(
    "should work with decimals ",
    function() {
      calci.init("1.2", "1.2");
      expect(calci.subtract()).toBe(0);
      expect(calci.multiply()).toBe(1.44);
      expect(calci.divide()).toBe(1);

    });

  it(
    "should work with negatives ",
    function() {
      calci.init("-1.2", "-1.2");
      expect(calci.subtract()).toBe(0);
      expect(calci.multiply()).toBe(1.44);
      expect(calci.divide()).toBe(1);

    });


});
