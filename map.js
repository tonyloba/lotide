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


 const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["bim","dom","cit"];
const words3 = ["false","true"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
// console.log(results1);

assertArraysEqual(["bim","dom","cit"], ['b', 'd', 'c']);
assertArraysEqual(["false","true"], ["1"]);
assertArraysEqual(["ground", "control", "to", "major", "tom"], ["g","c","t","m","t"])