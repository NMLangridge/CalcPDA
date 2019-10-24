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

  it('it can add', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    result = calculator.runningTotal
    assert.equal(result, 5)
  })

  it('it can subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    result = calculator.runningTotal
    assert.equal(result, 3)
  })

  it('it can multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    result = calculator.runningTotal
    assert.equal(result, 15)
  })

  it('it can divide', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    result = calculator.runningTotal
    assert.equal(result, 3)
  })

  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(9)
    calculator.numberClick(9)
    calculator.numberClick(9)
    result = calculator.runningTotal
    assert.equal(result, 999)
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.previousTotal
    calculator.operatorClick('+')
    result = calculator.runningTotal
    assert.equal(result, 10)
  })

  it('it can clear the running total without affecting the calculation', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.clearClick()
    calculator.add(4)
    result = calculator.runningTotal
    assert.equal(result, 9)
  })

});
