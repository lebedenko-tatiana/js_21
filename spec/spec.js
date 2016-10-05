var test = require('../js/script.js'); 

describe("test my_pow", function() {

  it("call function my_pow for exponent 0", function() {
    var result;
    result = test(5, 0);
    expect(result).toBe(1);
  });

  it("call function my_pow for negative exponent", function() {
    result = test(2, -1);
    expect(result).toBe(0.5);
  });

  it("call function my_pow for negative exponent and negative value", function() {
    result = test(-2, -2);
    expect(result).toBe(0.25);
  });

  it("call function my_pow for negative exponent and value = 0", function() {
    var result = test(0, -1);
    expect(result).toBe('incurrect values!');
  });

});

