# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tonyloba/lotide`

**Require it:**

`const _ = require('@tonyloba/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => [1]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: function 'head' which returns the first item in the array
* `function2(middle)`:function middle  takes in an array and return the middle-most element(s) of the given array.
* `function3(map)`:  function  'map'  returns a new array based on the results of the callback function.
* `function3(tail)`: function 'tail'  returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `function3(takeUntil)`: function 'takeUntil'  returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `function3(without)`: function 'without'  returns a subset of a given array, removing unwanted elements.
* `function3(letterPositions)`: function letterPositions  returns all the indices (zero-based positions) in the string where each character is found. 
* `function3(findKey)`: function 'findKey'  takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `function3(findKeyByValue)`: function 'findKeyByValue'  takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `function3(eqObjects)`: function 'eqObjects'  takes in two objects and returns true or false, based on a perfect match.
* `function3(eqArrays)`: function 'eqArrays'  takes in two arrays and returns true or false, based on a perfect match.
* `function3(countOnly)`: function 'countOnly'  takes in a collection of items and return counts for a specific subset of those items
* `function3(countLetters)`: function 'countLetters' takes in a sentence (as a string) and then return a count of each of the letters in that sentence.