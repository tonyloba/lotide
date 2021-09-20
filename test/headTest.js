const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 'Hello' for '['Hello', 'Lighthouse', 'Labs']' ", () => {
    assert.strictEqual(head([100]), 100); 
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });
  it("returns '100' for [100]", () => {
    assert.strictEqual(head([100]), 100); 
  });
});



// // EXPORT assertEqual :
// const head = require('../head');


// const headTest = function (actual, expected) {
//   const errorMsg = '!==';
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
//   }

// };

// // TEST CODE
// headTest(head([5, 6, 7]), 5);
// headTest(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// headTest(head([]), undefined);
// headTest(head([100]), 100);