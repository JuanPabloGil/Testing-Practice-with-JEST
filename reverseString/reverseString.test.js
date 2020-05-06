const reverseString = require('./reverseString');


test('reverses single word', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses multiple words', () => {
  expect(reverseString('hello there')).toBe('ereht olleh');
});

test('works with numbers and punctuation', () => {
  expect(reverseString('123! abc!')).toBe('!cba !321');
});
