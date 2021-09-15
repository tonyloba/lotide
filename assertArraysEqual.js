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

const assertArraysEqual = function (arr1, arr2) {
  !eqArrays(arr1, arr2) ? console.log("Arrays are NOT equal") : console.log("Arrays are  equal");
}
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], ['1', 2]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
