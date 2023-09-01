const { describe, it } = require('node:test');
const assert = require('assert');
const { add, sub } = require('../src/maths');

describe('sum', () => {
  it('should add two numbers', () => {
    const sum = add(1, 1);
    assert.strictEqual(sum, 2);
  });
});

describe('sub', () => {
  it('should be zero when two numbers are equal', () => {
    const difference = sub(1, 1);
    assert.strictEqual(difference, 0);
  });
});
