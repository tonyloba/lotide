const eqArrays = require('../eqArrays');

const eqArrayTest = function (actual, expected) {
  const errorMsg = '!==';
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
  }

};




// TEST CODE
eqArrayTest(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
eqArrayTest(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
eqArrayTest(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
eqArrayTest(eqArrays(["1", "2", "1"], ["1", "2", 3]), false); // => false

