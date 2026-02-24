'use strict';

/**
 * ============================================================================
 * JAVASCRIPT ARRAYS - INTERVIEW GUIDE
 * ============================================================================
 */

/**
  Que: What is a JavaScript Array?
  
  Ans: A JavaScript array is an ordered collection of elements stored in a single variable. It's a special type of object used to store multiple values of any data type (numbers, strings, objects, functions, etc.) in a list format.
 
    Key Characteristics:
    - Zero-indexed (first element at index 0)
    - Dynamic size (can grow or shrink)
    - Mutable (elements can be added, removed, or modified)
    - Can contain mixed data types
    - Technically an object with numeric keys and special 'length' property
 */

/**
  Q: How do you create an Array in JavaScript?
  
  A: There are multiple ways to create arrays:
 */

// 1. Array Literal (Recommended)
const arr1 = [];                           // Empty array
const arr2 = [1, 2, 3, 4, 5];            // Array with elements
const arr3 = [1, 'hello', true, null];   // Mixed data types

// 2. Array Constructor
const arr4 = new Array();                  // Empty array
const arr5 = new Array(5);                 // Array with 5 empty slots
const arr6 = new Array(1, 2, 3);          // Array with elements

// 3. Array.from()
const arr7 = Array.from('hello');         // ['h', 'e', 'l', 'l', 'o']
const arr8 = Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]

// 4. Spread Operator
const arr9 = [...arr2];                    // Copy of arr2

/**
 Que: What are the important Array properties and methods?
 
 Ans: 

// Mutating Methods (modify original array):
// - push(): Add element(s) to end
// - pop(): Remove element from end
// - shift(): Remove element from start
// - unshift(): Add element(s) to start
// - splice(): Add/remove elements at any position
// - reverse(): Reverse the array
// - sort(): Sort elements

// Non-mutating Methods (return new array/value):
// - slice(): Return shallow copy of portion
// - concat(): Combine arrays
// - indexOf(): Find index of element
// - includes(): Check if element exists
// - map(): Transform each element
// - filter(): Keep elements matching condition
// - reduce(): Reduce array to single value
// - find(): Find first element matching condition
// - forEach(): Iterate through each element
// - join(): Join elements into string


/**
  Que: What are important array iteration methods?
  
  Ans: These methods help you iterate and transform arrays:
 */

const arr = [1, 2, 3, 4, 5];

// 1. forEach() - Loop through each element (returns undefined)
arr.forEach((element, index) => {
  console.log(`Index: ${index}, Value: ${element}`);
});

// 2. map() - Transform each element, return new array
const doubled = arr.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// 3. filter() - Keep elements matching condition, return new array
const evens = arr.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]

// 4. reduce() - Reduce array to single value
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15

// 5. find() - Find first element matching condition
const found = arr.find(num => num > 3);
console.log(found);  // 4

// 6. findIndex() - Find index of first element matching condition
const foundIndex = arr.findIndex(num => num > 3);
console.log(foundIndex);  // 3 (index of element 4)

// 7. some() - Check if ANY element matches condition
const hasEven = arr.some(num => num % 2 === 0);
console.log(hasEven);  // true

// 8. every() - Check if ALL elements match condition
const allPositive = arr.every(num => num > 0);
console.log(allPositive);  // true


/**
 * Q: What are array accessor and mutator methods?
 * 
 * A:
 *    ACCESSOR METHODS (don't modify array):
 *    - slice(), concat(), indexOf(), lastIndexOf(), includes(), join()
 *    - map(), filter(), reduce(), find(), findIndex(), some(), every()
 *    
 *    MUTATOR METHODS (modify array):
 *    - push(), pop(), shift(), unshift(), splice()
 *    - reverse(), sort(), fill(), copyWithin()
 */

/**
 * Q: What is array destructuring?
 * 
 * A: Destructuring is a convenient way to extract values from arrays and
 *    assign them to variables.
 */

const [first, second, third] = [1, 2, 3];
console.log(first);   // 1
console.log(second);  // 2

// Skip elements
const [x, , z] = [10, 20, 30];
console.log(x, z);  // 10 30

// Rest operator
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head);  // 1
console.log(tail);  // [2, 3, 4, 5]


/**
 * Q: How does Array.prototype.map() differ from Array.prototype.forEach()?
 * 
 * A: 
 *    map():
 *    - Returns a NEW array
 *    - Each element is transformed by the callback
 *    - Chainable (can chain other methods)
 *    - Should be used when you need a transformed array
 *    
 *    forEach():
 *    - Returns undefined
 *    - Iterates through array for side effects
 *    - Not chainable
 *    - Should be used for iterations where you don't need return value
 */

const numbers2 = [1, 2, 3];
const mapResult = numbers2.map(n => n * 2);
console.log(mapResult);  // [2, 4, 6]

const forEachResult = numbers2.forEach(n => n * 2);
console.log(forEachResult);  // undefined


/**
 * Q: Explain Array.prototype.reduce()
 * 
 * A: reduce() processes each element in the array, maintaining an accumulator
 *    value that gets updated with each iteration, ultimately returning a 
 *    single final value.
 *    
 *    Syntax: array.reduce((accumulator, currentValue, index, array) => {
 *      return updatedAccumulator;
 *    }, initialValue);
 */

const nums = [1, 2, 3, 4];

// Sum all elements
const total = nums.reduce((sum, num) => sum + num, 0);
console.log(total);  // 10

// Find max value
const max = nums.reduce((max, num) => num > max ? num : max, -Infinity);
console.log(max);  // 4

// Convert array to object
const arr_to_obj = [['a', 1], ['b', 2]].reduce((obj, [key, val]) => {
  obj[key] = val;
  return obj;
}, {});
console.log(arr_to_obj);  // { a: 1, b: 2 }


/**
 * Q: What is the difference between slice() and splice()?
 * 
 * A:
 *    slice(start, end):
 *    - Non-mutating (doesn't modify original)
 *    - Returns shallow copy of portion
 *    - Two parameters: start index (inclusive), end index (exclusive)
 *    - Returns new array
 *    
 *    splice(start, deleteCount, item1, item2, ...):
 *    - Mutating (modifies original array)
 *    - Adds/removes elements
 *    - Three parameters: start index, count to delete, items to add
 *    - Returns array of deleted elements
 */

const array1 = [1, 2, 3, 4, 5];
const sliced = array1.slice(1, 3);
console.log(sliced);      // [2, 3]
console.log(array1);      // [1, 2, 3, 4, 5] - UNCHANGED

const array2 = [1, 2, 3, 4, 5];
const spliced = array2.splice(1, 2, 'a', 'b');
console.log(spliced);     // [2, 3] - DELETED ELEMENTS
console.log(array2);      // [1, 'a', 'b', 4, 5] - CHANGED


/**
 * Q: How does array indexing work?
 * 
 * A: Arrays use zero-based indexing. The first element is at index 0,
 *    the second at index 1, and so on. You can access elements using
 *    bracket notation or access with negative indices using slice().
 */

const arr10 = ['a', 'b', 'c', 'd'];
console.log(arr10[0]);      // 'a'
console.log(arr10[2]);      // 'c'
console.log(arr10[-1]);     // undefined (JS doesn't support negative indexing directly)
console.log(arr10.at(-1));  // 'd' (use .at() method for negative indexing)


/**
 * Q: What is array cloning? How do you clone an array?
 * 
 * A: Array cloning creates a copy of an array. This is important because
 *    arrays are reference types - assigning one array to another creates
 *    a reference to the same array, not a copy.
 */

const original = [1, 2, 3];
const reference = original;  // Not a clone, just reference

reference.push(4);
console.log(original);   // [1, 2, 3, 4] - ORIGINAL IS MODIFIED!

// Ways to clone:
const clone1 = original.slice();           // Shallow copy
const clone2 = [...original];               // Spread operator
const clone3 = Array.from(original);        // Array.from()
const clone4 = original.concat();           // concat()
const clone5 = JSON.parse(JSON.stringify(original));  // Deep copy (works for primitives)


/**
 * Q: What are higher-order functions in context of arrays?
 * 
 * A: Higher-order functions are functions that take other functions as
 *    arguments or return functions. Array methods like map(), filter(),
 *    and reduce() are higher-order functions that accept callbacks.
 */

// Example: Creating a higher-order function
function multiplyBy(factor) {
  return function(array) {
    return array.map(num => num * factor);
  };
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo([1, 2, 3]));  // [2, 4, 6]


/**
 * Q: What is the time complexity of common array operations?
 * 
 * A:
 *    - Access (by index): O(1)
 *    - Search (linear): O(n)
 *    - Insert (at end): O(1) amortized
 *    - Insert (at start): O(n)
 *    - Delete (at end): O(1)
 *    - Delete (at start): O(n)
 *    - Sort: O(n log n) for most methods
 */
