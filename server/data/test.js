var deepEquals = require('./submission.js')
var chai = require('chai'); 
var mocha = require('mocha');
var should = chai.should();

describe('deepEquals()', function(){
  it('should return true for two empty objects', function(){
    var expected = true;
    var actual = deepEquals({}, {});
    actual.should.equal(expected);
  });
  it('distinguishes between objects and arrays', function() {
    var a = { foo: [2, { bar: {}}]};
    var b = { foo: [2, { bar: []}]};
    var expected = false;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
  it('should use deep equality', function(){
    var a = { foo: 1 };
    var b = { foo: '1' };
    var expected = false;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
  it('should return true for two objects with the same keys and values', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar' };
    var expected = true;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
  it('should return false for two objects with the same keys and but different values', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'pow' };
    var expected = false;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
  it('should return false for two objects with different number of keys', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar', biz: 'baz' };
    var expected = false;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
  it('should return false for two objects with different number of keys', function(){
    var a = { foo: 'bar', biz: 'baz' };
    var b = { foo:'bar' };
    var expected = false;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
  it('should return true for similar nested object properties', function(){
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c: 3 } };
    var expected = true;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
  it('should return false for dissimilar nested object properties', function(){
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c:'potato' } };
    var expected = false;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
  it('should return false for dissimilar nested object properties', function(){
    var a = { foo: 1, b: { c: 'potato'} };
    var b = { foo: 1, b: { c: 3 } };
    var expected = false;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    var expected = true;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    var expected = true;
    var actual = deepEquals(a, b);
    actual.should.equal(expected);
  });
});