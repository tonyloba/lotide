const assertEqual = function (actual, expected) {
    const errorMsg = '!==';
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
  }
};

// const eqArrays = function (arrOne, arrTwo) {
//   if (arrOne.length !== arrTwo.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arrOne.length; i++) {
//       // if(arrOne[i]!== arrTwo[i]) 
//       if (JSON.stringify(arrOne) !== JSON.stringify(arrTwo)) {
//         return false;
//       }
//       return true;
//     }
//   }
// }

// const assertArraysEqual = function (arr1, arr2) {
//   !eqArrays(arr1, arr2) ? console.log("Arrays are NOT equal") : console.log("Arrays are  equal");
// }


const letterPositions = function(sentence) {
  let total = {};  
  for(let i=0; i < sentence.length ; i++){
    if(!total[sentence[i]]){
      total[sentence[i]] = [];      
    }
    total[sentence[i]].push(i);
  }
  return total ;
  // console.log(total);
};

assertEqual(letterPositions('Helllo'),
{ H: [ 0 ], e: [ 1 ], l: [ 2, 3, 4 ], o: [ 5 ] })
console.log(letterPositions('Helllo'));


module.exports = letterPositions;
