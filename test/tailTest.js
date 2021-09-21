const assert = require('chai').assert;
const tail   = require('../tail');


describe("#tail", () => {
  it("returns '[2,3]' for '[1, 2, 3]'", () => {
    assert.equal(tail([1, 2, 3]), [2, 3]);
  });
  it("returns 'Labs' for '['Hello', 'Lighthouse', 'Labs']' ", () => {
    assert.equal(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });

});

// const tail = require('../tail');

// const tailTest = function(actual, expected) {
//   const errorMsg = '!==';
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
//   }

// };


// // TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// tailTest(result, ["Lighthouse", "Labs"]);

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); 
// const result = tail([1,2,3]);
// tailTest(result, ["2,3"]);


// no need to capture the return value since we are not checking it
// tailTest(words.length, 3);