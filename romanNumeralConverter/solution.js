function convertToRoman(num) {
  var remainder = num;
  var answer = [];
  var i = 0;
  
  while (remainder > 0) {
    if (remainder >= 1000) {
      answer[i] = 'M';
      remainder -= 1000;
    } else if (remainder >= 900 && remainder < 1000) {
      answer[i] = 'CM';
      remainder -= 900;
    } else if (remainder >= 500 && remainder < 1000) {
      answer[i] = 'D';
      remainder -= 500;
    } else if (remainder >= 400 && remainder < 500) {
      answer[i] = 'CD';
      remainder -= 400;
    } else if (remainder >= 100 && remainder < 400) {
      answer[i] = 'C';
      remainder -= 100;
    } else if (remainder >= 90 && remainder < 100) {
      answer[i] = 'XC';
      remainder -= 90;
    } else if (remainder >= 50 && remainder < 90) {
      answer[i] = 'L';
      remainder -= 50;
    } else if (remainder >= 40 && remainder < 50) {
      answer[i] = 'XL';
      remainder -= 40;
    } else if (remainder >= 10 && remainder < 40) {
      answer[i] = 'X';
      remainder -= 10;
    } else if (remainder === 9) {
      answer[i] = 'IX';
      remainder -= 9;
    } else if (remainder >= 5 && remainder < 9) {
      answer[i] = 'V';
      remainder -= 5;
    } else if (remainder === 4) {
      answer[i] = 'IV';
      remainder -= 4;
    } else if (remainder >= 1 && remainder < 4) {
      answer[i] = 'I';
      remainder -= 1;
    }
    i++;
  }
  
  return answer.join("");
}

convertToRoman(36);
