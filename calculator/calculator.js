function areNumbers(a, b) {
  return typeof a === 'number' && typeof b === 'number';
}

function add(a, b) {
  return areNumbers(a, b) ? a + b : 'Error';
}

function subtract(a, b) {
  return areNumbers(a, b) ? a - b : 'Error';
}

function divide(a, b) {
  if (b === 0) {
    return 'Infinite';
  }
  return areNumbers(a, b) ? a / b : 'Error';
}

function multiply(a, b) {
  return areNumbers(a, b) ? a * b : 'Error';
}


module.exports = {
  add,
  subtract,
  divide,
  multiply,
};
