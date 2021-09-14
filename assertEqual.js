const errorMsg = '!==';
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Assertion Failed: " + actual + " " + errorMsg + " " + expected);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("String", "String");
assertEqual(1, 1);
assertEqual(1, '1');

