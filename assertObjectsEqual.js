const assertEqual = function (actual, expected) {
  const errorMsg = '!==';
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
  }
};

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

// OUR function:

const eqObjects = function(object1, object2) {
 trueCondition = false;
 //check obj_keys length (should be the same)
 if (Object.keys(object1).length !== Object.keys(object2).length) {
   return false;
 }

for(let key of Object.keys(object1)){ 
 // check if both keys are arrays
  if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    // using eqArrays to check  that arrays are equal if so - assign true for our trueCondition
      if(eqArrays(object1[key],object2[key]) === true){
        trueCondition = true;
      }
    // if both arrays but didnt pass eqArrays-test fall to false
      else {
        return false;
      }
  }
// check if either of obj-key is array
  else if (Array.isArray(object1[key]) || Array.isArray(object2[key])){
    return false;
  }
  // if both obj euals - return true
    else if (object1[key] === object2[key]){
      trueCondition = true;
    }

    else {
      return false ;
        }
  }
  return trueCondition;
};


///////// START HERE://////////////////

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  
if(eqObjects(object1,object2)) {
  console.log(`✅✅✅ Assertion Passed: ${object1} === ${object2}`)
}
else {
  console.log(`❌❌❌ Assertion Failed: ${object1} !== ${object2}`)
}
};

console.log(`Example label: ${inspect(actual)}`);


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false);// false



module.exports = assertObjectsEqual;