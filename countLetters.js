const assertEqual = function (actual, expected) {
  const errorMsg = '!==';
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} ${errorMsg} ${expected}`);
  }
};


const countLetters = function (str) {
  let total = {};
  for (let index in str) {
    if (total[str[index]]) {
      total = Object.assign(total, { 
        [str[index]]: total[str[index]] + 1
      })
      // total = {
      //   ...total,
      //   [str[index]]: total[str[index]]+1
      // }
    } else {
      total = Object.assign(total, {
        [str[index]]: 1
      })
    }
    // console.log(str[index]);
  }
  return total;
}
console.log(countLetters('Hello Home!'));

assertEqual(countLetters("Haha") , { H: 1, a: 2, h: 1 });
assertEqual(countLetters("A") , { A: 1 });
assertEqual(countLetters("") , {});



module.exports = countLetters;



