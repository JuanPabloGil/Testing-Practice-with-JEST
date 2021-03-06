const calculator = require('./calculator.js');

describe('add', () => {
  test('adds 0 and 0', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('adds 2 and 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('adds positive numbers', () => {
    expect(calculator.add(2, 6)).toBe(8);
  });

  test('The parameters must be numbers', () => {
    expect(calculator.add('4', 4)).toBe('Error');
  });
});

describe('subtract', () => {
  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('The parameters must be numbers', () => {
    expect(calculator.subtract('4', 4)).toBe('Error');
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test('The parameters must be numbers', () => {
    expect(calculator.multiply('4', 4)).toBe('Error');
  });
});

describe('Divide', () => {
  test('divides two numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test('Number divided by zero must return Infinite', () => {
    expect(calculator.divide(4, 0)).toBe('Infinite');
  });

  test('The parameters must be numbers', () => {
    expect(calculator.divide('4', 4)).toBe('Error');
  });
});
