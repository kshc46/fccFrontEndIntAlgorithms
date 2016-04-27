function smallestCommons(arr) {

  var fullArr = [];
  var low = 0;
  var high = 0;
  var counter = 0;
  var i = 0;
  
  if (arr[0] < arr[1]) {
    low = arr[0];
    high = arr[1];
  } else {
    low = arr[1];
    high = arr[0];
  }
  
  while (low <= high) {
    fullArr.push(low);
    low += 1;
  }
  //noprotect
  while (counter < fullArr.length) {
    counter = 0;
    while (i <= fullArr.length) {
      if (high % fullArr[i] === 0) {
        counter++;
      }
      i++;
    }
    i = 0;
    high = high + fullArr[fullArr.length-1];
  }
  
  return high - fullArr[fullArr.length-1];
}


smallestCommons([1,5]);
