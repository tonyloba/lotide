// EXPORT assertEqual :
const head = require('../head');


const headTest = function (actual, expected) {
  const errorMsg = '!==';
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
  }

};

// TEST CODE
headTest(head([5, 6, 7]), 5);
headTest(head(["Hello", "Lighthouse", "Labs"]), "Hello");
headTest(head([]), undefined);
headTest(head([100]), 100);