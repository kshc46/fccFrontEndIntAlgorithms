function findElement(arr, func) {
  
  var truth = [];
  var i = 0;
  
  while (i < arr.length) {
    if (func(arr[i]) === true) {
      truth.push(arr[i]);
    }
    i++;
  }
  
  if (truth !== 0) {
    return truth[0];
  } else {
    return undefined;
  }
  
  
}

findElement([1,3,5,8,9,5], function(num) { return num % 2 === 0; });
