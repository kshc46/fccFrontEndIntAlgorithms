function uniteUnique(arr1, arr2, arr3) {

  var arr = [];
  
  for (var i in arguments) {
    for (var ii in arguments[i]) {
      arr.push(arguments[i][ii]);
    }
  }
    
  var newArr = [arr1[0]];
  
  var answer = arr.reduce(function(previousValue, currentValue, currentIndex, array) {
    if(currentIndex === array.indexOf(currentValue)) {
      if (currentValue !== null) {
        newArr.push(currentValue);
      }
    }
    
  });
  
  return newArr;
  
  
}

uniteUnique([1, 2, 3], [5, 2, 1, 4]);