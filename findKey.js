const assertEqual = function (actual, expected) {
  const errorMsg = '!==';
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
  }
};

const starObject = {  
  "AA":2,
  "Blue Hill": 
  { 
    stars: 1 
  },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 22 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: "hhh" },
  "Akelarre":  { stars: 3 }
}

const findKeyByVal = function (obj, val) {
  for (let key in obj){
    for(let secondKey in obj[key]){
      if(obj[key][secondKey] == val){
        return key
      }
    }
  }
  // for (let key in obj) {
  //   if (obj[key] == val) {
  //     return key;
  //   }
  // }
  return Notinlist;
}
const result = findKeyByVal(starObject,22) // => "noma"
console.log(result);

assertEqual(findKeyByVal(starObject,22), "noma");
assertEqual(findKeyByVal(starObject,"hhh"), "Or");
