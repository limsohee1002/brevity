var nthFibonacci = require('./submission.js')
var chai = require('chai'); 
var mocha = require('mocha');
var should = chai.should();
describe('nthFibonacci', function() {
  it('should exist', function(){
    should.exist(nthFibonacci);
  });
  it('should return integers', function(){
    var result = nthFibonacci(0);
    should.exist(result);
    should.exist(Number(result));
  });
  it('should handle the base cases with ease', function(){
    nthFibonacci(0).should.equal(0);
    nthFibonacci(1).should.equal(1);
  });
  it('should return the nth Fibonacci number for a given n', function(){
    nthFibonacci(5).should.equal(5);
    nthFibonacci(10).should.equal(55);
    nthFibonacci(20).should.equal(6765);
  });
});