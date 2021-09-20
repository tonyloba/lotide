const assertArraysEqual =  require('../assertArraysEqual');

const assertArraysEqualTest = function (actual, expected) {
  const errorMsg = '!==';
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
  }

};



assertArraysEqualTest([1, 2, 3], [1, 2, 3]);
assertArraysEqualTest([1, 2], ['1', 2]);
assertArraysEqualTest([1, 2, 3, 4], [1, 2, 3]);