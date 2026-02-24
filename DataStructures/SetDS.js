'use strict';

/**
 * ============================================================================
 * JAVASCRIPT SETS - INTERVIEW GUIDE
 * ============================================================================
 */

/**
  Que: What is a JavaScript Set?

  Ans: A Set is a collection of unique values. Unlike arrays, Sets don't allow duplicate values and don't maintain insertion order (though order is preserved in modern JS). Sets are iterable and work with any data type.

    Key Characteristics:
    - Stores unique values only (no duplicates)
    - Can contain any data type (primitives, objects, etc.)
    - Maintains insertion order
    - No index-based access
    - Fast lookup (O(1) average case)
    - Iterable (can use for...of, forEach)
 */

/**
  Q: How do you create a Set in JavaScript?

  A: There are multiple ways to create sets:
 */

// 1. Set Constructor (Recommended)
const set1 = new Set();                    // Empty set
const set2 = new Set([1, 2, 3, 4, 4]);   // From array (duplicates removed)
const set3 = new Set('hello');            // From string (unique chars)

// 2. Adding elements
const set4 = new Set();
set4.add(1);
set4.add(2);
set4.add(2);  // Duplicate, ignored
console.log(set4);  // Set(2) { 1, 2 }

/**
 Que: What are the important Set methods?

 Ans: Sets provide methods for adding, removing, and checking elements:

// Core Methods:
- add(value): Add element to set
- delete(value): Remove element from set
- has(value): Check if element exists
- clear(): Remove all elements
- size: Get number of elements (property, not method)

// Iteration Methods:
- forEach(callback): Iterate through elements
- values(): Return iterator of values
- keys(): Same as values() (for Map compatibility)
- entries(): Return iterator of [value, value] pairs
 */

/**
  Que: What are important Set methods with examples?

  Ans: Here are the most commonly used Set methods:
 */

const fruits = new Set();

// 1. add() - Add elements to set
fruits.add('apple');
fruits.add('banana');
fruits.add('apple');  // Duplicate, ignored
console.log(fruits);  // Set(2) { 'apple', 'banana' }

// 2. has() - Check if element exists
console.log(fruits.has('apple'));   // true
console.log(fruits.has('orange'));  // false

// 3. delete() - Remove specific element
fruits.delete('banana');
console.log(fruits);  // Set(1) { 'apple' }

// 4. size - Get number of elements
console.log(fruits.size);  // 1

// 5. clear() - Remove all elements
fruits.clear();
console.log(fruits.size);  // 0

/**
 * Q: How do you iterate over a Set?
 *
 * A: Sets are iterable and support multiple iteration methods:
 */

const numbers = new Set([1, 2, 3, 4, 5]);

// 1. for...of loop
for (const num of numbers) {
  console.log(num);
}

// 2. forEach() method
numbers.forEach(num => {
  console.log(num);
});

// 3. Using iterators
const values = numbers.values();
console.log(values.next().value);  // 1

// 4. Spread operator (convert to array)
const arr = [...numbers];
console.log(arr);  // [1, 2, 3, 4, 5]

/**
 * Q: How do you perform Set operations?
 *
 * A: Common set operations like union, intersection, and difference:
 */

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union: Elements in either set
const union = new Set([...setA, ...setB]);
console.log(union);  // Set(6) { 1, 2, 3, 4, 5, 6 }

// Intersection: Elements in both sets
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);  // Set(2) { 3, 4 }

// Difference: Elements in setA but not in setB
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference);  // Set(2) { 1, 2 }

// Symmetric Difference: Elements in either set but not both
const symmetricDiff = new Set([...setA].filter(x => !setB.has(x))
  .concat([...setB].filter(x => !setA.has(x))));
console.log(symmetricDiff);  // Set(4) { 1, 2, 5, 6 }

/**
 * Q: How do you convert between Sets and Arrays?
 *
 * A: Easy conversion using spread operator and constructors:
 */

const arr1 = [1, 2, 2, 3, 4, 4];
const uniqueSet = new Set(arr1);        // Array to Set (removes duplicates)
console.log(uniqueSet);  // Set(4) { 1, 2, 3, 4 }

const backToArray = [...uniqueSet];     // Set to Array
console.log(backToArray);  // [1, 2, 3, 4]

const arrayFromSet = Array.from(uniqueSet);  // Alternative way
console.log(arrayFromSet);  // [1, 2, 3, 4]

/**
 * Q: What are WeakSets?
 *
 * A: WeakSets are similar to Sets but with key differences:
 *    - Only store objects (not primitives)
 *    - Weak references (objects can be garbage collected)
 *    - No iteration methods (forEach, values, etc.)
 *    - No size property
 *    - Cannot be cleared
 */

const weakSet = new WeakSet();
const obj1 = { name: 'John' };
const obj2 = { name: 'Jane' };

weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1));  // true

// Objects can be garbage collected if no other references exist
// weakSet.add('string');  // Error: only objects allowed

/**
 * Q: When should you use a Set vs an Array?
 *
 * A:
 *    Use Set when:
 *    - You need unique values only
 *    - Fast lookup is important (O(1) vs O(n) for arrays)
 *    - Order doesn't matter or insertion order is sufficient
 *    - You need set operations (union, intersection, etc.)
 *
 *    Use Array when:
 *    - You need ordered collection with duplicates allowed
 *    - You need index-based access
 *    - You need to store primitives and objects together frequently
 */

/**
 * Q: What is the time complexity of Set operations?
 *
 * A:
 *    - add(): O(1) average case
 *    - delete(): O(1) average case
 *    - has(): O(1) average case
 *    - size: O(1)
 *    - clear(): O(n)
 *    - Iteration: O(n)
 */