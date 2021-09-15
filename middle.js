const eqArrays = function (arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (JSON.stringify(arrOne) !== JSON.stringify(arrTwo)) {
        return false;
      }
      return true;
    }
  }
}

const assertArraysEqual = function (arr1, arr2) {
  const errorMsg = '!==';
  !eqArrays(arr1, arr2) ? console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`❌ Assertion Failed: ${arr1} ${errorMsg} ${arr2}`);
}

const middle = function (array) {
  const len = array.length;
  if (len === 1 || len === 2) {
    return [];
  } else if ((len % 2 !== 0)) {
    let mid = Math.floor(array.length / 2);
    return array[mid];
  } else {
    let mid = Math.floor(array.length / 2);
    return [array[mid - 1], array[mid]]
  }
}
//  console.log(middle([1,2,3,4,5,6]));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, ]), []);
