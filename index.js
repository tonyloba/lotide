const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  head:head,
  tail:tail,
  middle:middle,
  assertArraysEqual:assertArraysEqual,
  assertEqual:assertEqual,
  countLetters:countLetters,
  countOnly:countOnly,
  eqArrays:eqArrays,
  eqObject:eqObjects,
  findKey:findKey,
  findKeyByValue:findKeyByValue,
  letterPositions:letterPositions,
  map:map,
  takeUntil:takeUntil,
  without:without
};