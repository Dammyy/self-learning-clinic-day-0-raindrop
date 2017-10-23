const assert = require('chai').assert;
const rainObj = require('./raindrop.js');

describe('raindrop', () => {

  describe('handle invalid input', () => {
    it('should return undefined as the raindrop for demo', () => {
      assert.equal(rainObj.raindrop('demo'), 'undefined');
    });
  });

  describe('handle invalid input', () => {
    it('should return invalid input for 0', () => {
      assert.equal(rainObj.raindrop(0), 'please enter a number');
    });
  });

  describe('handle valid input', () => {
    it('should return PlingPlang for 15', () => {
      assert.equal(rainObj.raindrop(15), 'PlingPlang');
    });
  });

  describe('handle valid input', () => {
    it('should return plong for 28', () => {
      assert.equal(rainObj.raindrop(28), 'Plong');
    });
  });

  describe('handle valid input', () => {
    it('should return straight 1 for 1 ', () => {
      assert.equal(rainObj.raindrop(1), '1');
    });
  });

  describe('handle valid input', () => {
    it('should return Pling for 9', () => {
      assert.equal(rainObj.raindrop(9), 'Pling');
    });
  });

  describe('handle valid input', () => {
    it('should return PlingPlangPlong for 105', () => {
      assert.equal(rainObj.raindrop(105), 'PlingPlangPlong');
    });
  });
  describe('handle valid input', () => {
    it('should return plong for 14', () => {
      assert.equal(rainObj.raindrop(14), 'Plong');
    });
  });

  describe('handle invalid input', () => {
    it('should return invalid input for -9', () => {
      assert.equal(rainObj.raindrop(-9), 'invalid input');
    });
  });

  describe('handle valid input', () => {
    it('should return straight 34 for 34', () => {
      assert.equal(rainObj.raindrop(34), '34');
    });
  });

});