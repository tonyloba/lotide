// const errorMsg = '!==';
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
//   }

// };

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

const without = function (source,itemsToRemove){
  let newArr = [];
  for (let i = source.length-1; i >=0; i--) {
    for (let j=0; j<itemsToRemove.length ; j++){
      if(source[i] === itemsToRemove[j]){
        source.splice(i,1);
      }
    }
  }
  console.log(source);
} 

const assertArraysEqual = function (arr1, arr2) {
  !without(arr1, arr2) ? console.log("Arrays differs") : console.log("Arrays are  equal");
};

assertArraysEqual([1, 2, 3], [1]) // => [2, 3]
assertArraysEqual(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual([1, 2, 3], [1, 2, 3]);

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;


