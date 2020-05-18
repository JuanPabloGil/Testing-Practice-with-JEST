function validate(arr) {
  const indexesToConvert = [];
  if (
    typeof Array.isArray(arr)
    && arr.length > 0
  ) {
    const invalid = arr.some((value, index) => {
      if (typeof value === 'string') {
        indexesToConvert.push(index);
      }
      return Object.is(parseInt(value, 10), NaN);
    });
    if (invalid) {
      return null;
    }
    return indexesToConvert;
  }
  return null;
}

function analyze(arr) {
  const valid = validate(arr);
  if (valid) {
    valid.forEach((index) => {
      arr[index] = parseInt(arr[index], 10);
    });
  } else {
    return 'No valid enter';
  }

  const obj = {};

  let average = 0;
  let min = arr[0];
  let max = arr[0];
  const arrLength = arr.length;

  arr.forEach((item) => {
    average += item;

    if (item <= min) {
      min = item;
    }
    if (item >= max) {
      max = item;
    }
  });

  obj.average = parseInt((average / arrLength).toFixed(0), 10);
  obj.min = min;
  obj.max = max;
  obj.length = arrLength;

  return obj;
}

module.exports = analyze;
