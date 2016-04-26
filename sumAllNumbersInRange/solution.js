function sumAll(arr) {
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var i = max;
  var total = min;
  while (i > min) {
    total += i;
    i--;
  }
  return total;
}

sumAll([1, 4]);
