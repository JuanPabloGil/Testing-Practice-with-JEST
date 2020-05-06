const analyze = require('./analyze');


test('return correct average', () => {
  const arr = analyze([1, 8, 3, 4, 2, 6]);
  expect(arr.average).toBe(4);
});

test('return the minimun number on the array', () => {
  const arr = analyze([1, 8, 3, 4, 2, 6]);
  expect(arr.average).toBe(4);
});

test('return the Maximum number on the array', () => {
  const arr = analyze([1, 8, 3, 4, 2, 6]);
  expect(arr.average).toBe(4);
});

test('return the length of the array', () => {
  const arr = analyze([1, 8, 3, 4, 2, 6]);
  expect(arr.average).toBe(4);
});
