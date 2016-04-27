function binaryAgent(str) {
  var num = 114;
  var arr = str.split(" ");
  var passArr = [];
  var binArr = [128, 64, 32, 16, 8, 4, 2, 1];
  var newArr = [];
  
  var counter = 0;  
  var ii = 0;
    
  for (var i in arr) {
    passArr = arr[i].split("");
    while (ii < passArr.length) {
      if (passArr[ii] === "1") {
        counter += binArr[ii];
      }
      ii++;
    }
    newArr.push(String.fromCharCode(counter));
    counter = 0;
    ii = 0;
  }

  return newArr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
