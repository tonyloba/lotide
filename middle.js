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

module.exports = middle;

