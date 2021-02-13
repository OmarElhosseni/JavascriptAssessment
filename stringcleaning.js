function strClean(arrOfStrs){
  let cleanedArray = [];
  for(let i = 0; i < arrOfStrs.length; i++) {
    let trimmedString = arrOfStrs[i].trim();
    let addedString = "";
    for(let j = 0; j < trimmedString.length; j++) {
      if(trimmedString.charCodeAt(j) > 57 || trimmedString.charCodeAt(j) < 50) {
        if(trimmedString.charCodeAt(j) == 48) {
          addedString = addedString.concat("zero");
        }
        else if(trimmedString.charCodeAt(j) == 49) {
          addedString = addedString.concat("one");
        }
        else if(trimmedString.charCodeAt(j) == 32 || trimmedString.charCodeAt(j) == 8287) {
          addedString = addedString.concat("_");
        }
        else {
          addedString = addedString.concat(trimmedString.charAt(j));
        }
      }
    }
    cleanedArray.push(addedString);
  }
  return cleanedArray;
}



// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;