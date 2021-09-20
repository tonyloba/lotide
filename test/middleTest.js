const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, ]), []);



// const eqArrays = function (arrOne, arrTwo) {
//   if (arrOne.length !== arrTwo.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arrOne.length; i++) {
//       if (JSON.stringify(arrOne) !== JSON.stringify(arrTwo)) {
//         return false;
//       }
//       return true;
//     }
//   }
// }

// const middleTest = function (arr1, arr2) {
//   const errorMsg = '!==';
//   !eqArrays(arr1, arr2) ? console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`❌ Assertion Failed: ${arr1} ${errorMsg} ${arr2}`);
// }

// middleTest(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// middleTest(middle([1, 2, 3, 4, 5]), [3]);
// middleTest(middle([1, 2]), []);
// middleTest(middle([1, ]), []);

