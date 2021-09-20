const errorMsg = '!==';
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
  }

};

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

// // another ver :
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



// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "1"], ["1", "2", 3]), false); // => false




