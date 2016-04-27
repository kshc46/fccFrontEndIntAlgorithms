function fearNotLetter(str) {
  var alphabet ="abcdefghijklmnopqrstuvwxyz";
  
  var start = str.charCodeAt(0);
  var finish = str.charCodeAt(str.length-1);
  var answer = "";
  var counter = 0;
  
  while ((start + counter) < finish) {
    if (str.charCodeAt(counter) !== (start + counter)) {
      answer = start+counter;
      counter = 122;
    }
    counter++;
  }
  
  if (answer !== "") {
    return String.fromCharCode(answer);
  } else {
    return undefined;
  }
  
}

fearNotLetter("bcd");
