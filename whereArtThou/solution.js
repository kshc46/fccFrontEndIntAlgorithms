function whereAreYou(collection, source) {
  var sourceKeys = Object.keys(source);

  return collection.filter(function (obj) { 
    return sourceKeys.reduce(function (res, key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    }, false);
  });
  
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
