function dropElements(arr, func) {

  var length = arr.length;
  var i = 0;
  
  while (i < length) {
    if (func(arr[0]) === false) {
      arr.shift();
    } else {
      { break; }
    }
    i++;
  }
  
  
  
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
