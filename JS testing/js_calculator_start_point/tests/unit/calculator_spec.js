var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to click number', function(){
    calculator.numberClick(5);
    result = calculator.runningTotal;
    assert.strictEqual(5, result)
  })

  it('should be able to add numbers', function(){
    calculator.add(10);
    result = calculator.runningTotal;
    assert.strictEqual(10, result);
  })

  it('should be able to subtract numbers', function(){
    calculator.subtract(10);
    result = calculator.runningTotal;
    assert.strictEqual(-10, result)
  })

  it('should be able to multiply numbers', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.multiply(100);
    result = calculator.runningTotal;
    assert.strictEqual(500, result)
  })

  it('should be able to divide numbers', function(){
    calculator.numberClick(15);
    calculator.operatorClick('/');
    calculator.divide(5);
    result = calculator.runningTotal;
    assert.strictEqual(3, result);
  })

  it('should be able to have operator click', function(){
    result = calculator.previousOperator;
    assert.strictEqual(null, result);
    calculator.operatorClick('*');
    assert.strictEqual('*', calculator.previousOperator);
  })

  it('should be able to clear click', function(){
    calculator.numberClick(15);
    calculator.operatorClick('/');
    calculator.divide(5);
    result = calculator.runningTotal;
    assert.strictEqual(3, result);
    calculator.clearClick();
    assert.strictEqual(0, calculator.runningTotal);
  })

});
