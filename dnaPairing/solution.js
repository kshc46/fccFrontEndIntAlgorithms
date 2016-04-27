function pairElement(str) {
  var arr = str.split("");
  var tempArr = [];
  var finalArr = [];
  var i = 0;
  
  while (i < arr.length) {
    switch (arr[i]){
      case "A":
        tempArr = ["A", "T"];
        break;
      case "T":
        tempArr = ["T", "A"];
        break;
      case "C":
        tempArr = ["C", "G"];
        break;
      case "G":
        tempArr = ["G", "C"];
        break;
    }
    finalArr[i] = tempArr;
    i++;
  }
  
  return finalArr;
}

pairElement("GCG");
