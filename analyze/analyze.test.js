const analyze = require('./analyze');

test('no valid array', () => {
  expect(analyze({})).toBe('No valid enter');
});

test('empty array', () => {
  expect(analyze([])).toBe('No valid enter');
});

test('return correct answer object', () => {
  expect(analyze([1, 8, 'NaN', 4, 2, 6])).toBe('No valid enter');
});

test('return correct answer object', () => {
  expect(analyze([1, 8, '3', 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('return correct answer object', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
