function analyze(arr) {
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
