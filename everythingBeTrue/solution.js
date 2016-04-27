function truthCheck(collection, pre) {

  var answer = true;
  var arr = [];
  
  for (var i in collection) {
    if  (collection[i][pre] === undefined || collection[i][pre] === null || collection[i][pre] === 0 || collection[i][pre] === "" || Number.isNaN(collection[i][pre])) {
    answer = false;
    }
    arr.push(collection[i][pre]);
  }
  
  return answer;
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
