const capitalize = require('./capitalize');

test('Capitalize parameter its not a string ', () => {
  expect(capitalize(1)).toBe('Invalid string');
});

test('Capitalize parameter its a valid string ', () => {
  expect(capitalize('juan')).toBe('Juan');
});
