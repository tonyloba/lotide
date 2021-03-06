const eqArrays = function (arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      // if(arrOne[i]!== arrTwo[i]) 
      if (JSON.stringify(arrOne) !== JSON.stringify(arrTwo)) {
        return false;
      }
      return true;
    }
  }
}

const assertArraysEqual = function (arr1, arr2) {
  const errorMsg = '!==';
  !eqArrays(arr1, arr2) ? console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`❌ Assertion Failed: ${arr1} ${errorMsg} ${arr2}`);
}

module.exports = assertArraysEqual;

// Option 2 : 
// const intoStr = function(input){
//   return input.toString();
// }
// const eqArrays = function (arr1, arr2) {
//   let opt1 = intoStr(arr1);
//   let opt2 = intoStr(arr2);

//   if (opt1 === opt2){
//     return true;
//   } else {
//     return false;
//   }    
// }


