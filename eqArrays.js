const intoStr = function(input){
  return input.toString();
}
const eqArrays = function (arr1, arr2) {
  let opt1 = intoStr(arr1);
  let opt2 = intoStr(arr2);

  if (opt1 === opt2){
    return true;
  } else {
    return false;
  }    
}

module.exports = eqArrays;


