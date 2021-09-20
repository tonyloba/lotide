const assertEqual = require('../assertEqual');

 const assertEqualTest = function (actual, expected) {
  const errorMsg = '!==';
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
  }

};

// TEST CODE
assertEqualTest("Lighthouse Labs", "Bootcamp");
 assertEqualTest("String", "String");
 assertEqualTest(1, 1);
 assertEqualTest(1, '1');