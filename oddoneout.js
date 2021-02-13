function oddOneOut(arrOfInts){
  let firstOdd = -1;
  for(let i=0; i<arrOfInts.length; i++) {
    if (arrOfInts[i]%2 != 0) {
      firstOdd = arrOfInts[i];
      i = arrOfInts.length;
    }
  }
  return firstOdd
}


// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;