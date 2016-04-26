function sumFibs(num) {
  
  var arr = [1];
  var i = 1;
  var previous = 1;
  var place = 0;
  var finalSum = 1;
  
  while (i <= num) {
    place = i;
    i += previous;
    previous = place;    
    arr.push(i);
  }
  
  arr.splice(arr.length-1,1);
  
  for (var ii in arr) {
    if (arr[ii] % 2) {
      finalSum += arr[ii];
    }
  }
  
  return finalSum;
}

sumFibs(8);
