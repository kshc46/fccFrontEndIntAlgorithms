function steamrollArray(arr) {

  var flat = [];
  
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flat.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };
  
  arr.forEach(flatten);
  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
