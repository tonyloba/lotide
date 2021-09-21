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
 
 const array = [11, 2, 5, 79, 2, -1, 28, 40, 5];
//const array = ['a','s','d',3,'true', null,111];

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if(callback(item)){
      results.push(callback(item));
    }
  }
  return results;
}

const filterByNum =function(item){
  if(item > 10)  
  {
    return item;
  };
}

const myResult = takeUntil(array,filterByNum)
console.log(myResult);


// assertArraysEqual(takeUntil([11, 2, 5, 79, 2, -1, 28, 40, 5],[ 11, 79, 28, 40 ]));



module.exports = takeUntil;
