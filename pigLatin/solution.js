function translatePigLatin(str) {
  var arr = str.split("");
  var ii = 0;
  var counter = 0;
  
  while (ii < arr.length) {
    switch (arr[ii]) {
      case "a":
        ii = arr.length;
        break;
      case "e":
        ii = arr.length;
        break;
      case "i":
        ii = arr.length;
        break;
      case "o":
        ii = arr.length;
        break;
      case "u":
        ii = arr.length;
        break;
      case "y":
        ii = arr.length;
        break;
      default:
        ii++;
        counter++;
        break;
    }
  }
  
  if (counter === 0) {
    arr.push("way");
  } else if (counter !== 0) {
    arr.push(arr.splice(0,counter));
    arr.push("ay");
  }
  
  return arr.join("").replace(",","");
}

translatePigLatin("glove");
