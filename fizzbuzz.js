function fizzBuzz(start, end, skip){
    // Your code here!
  let retArray = [];
  for(let i = start; i<end+1; i++) {
    let stringNum = i.toString();
    if(stringNum.indexOf(skip.toString()) == -1) {
      retArray.push(parseInt(stringNum, 10));
    }
  }
  return retArray
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;