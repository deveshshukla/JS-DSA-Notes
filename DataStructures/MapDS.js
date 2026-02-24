'use strict';

/**
 * ============================================================================
 * JAVASCRIPT MAPS - INTERVIEW GUIDE
 * ============================================================================
 */

/**
  Que: What is a JavaScript Map?

  Ans: A Map is a collection of key-value pairs where keys can be any data type (objects, functions, primitives). Unlike plain objects, Maps maintain insertion order and provide better performance for frequent additions/removals.

    Key Characteristics:
    - Key-value pairs with any data type as keys
    - Maintains insertion order
    - Keys are unique (last set value wins)
    - Better performance than objects for large datasets
    - Iterable (can use for...of, forEach)
    - Size property (objects need Object.keys().length)
 */

/**
  Q: How do you create a Map in JavaScript?

  A: There are multiple ways to create maps:
 */

// 1. Map Constructor (Recommended)
const map1 = new Map();                    // Empty map
const map2 = new Map([['key1', 'value1'], ['key2', 'value2']]); // From array of pairs
const map3 = new Map(Object.entries({a: 1, b: 2})); // From object entries

// 2. Setting values
const map4 = new Map();
map4.set('name', 'John');
map4.set(42, 'answer');
map4.set({id: 1}, 'object key');
console.log(map4);  // Map(3) { 'name' => 'John', 42 => 'answer', {id: 1} => 'object key' }

/**
 Que: What are the important Map methods?

 Ans: Maps provide methods for managing key-value pairs:

// Core Methods:
- set(key, value): Add or update key-value pair
- get(key): Get value by key
- has(key): Check if key exists
- delete(key): Remove key-value pair
- clear(): Remove all pairs
- size: Get number of pairs (property, not method)

// Iteration Methods:
- forEach(callback): Iterate through entries
- keys(): Return iterator of keys
- values(): Return iterator of values
- entries(): Return iterator of [key, value] pairs
 */

/**
  Que: What are important Map methods with examples?

  Ans: Here are the most commonly used Map methods:
 */

const userMap = new Map();

// 1. set() - Add key-value pairs
userMap.set('name', 'Alice');
userMap.set('age', 30);
userMap.set('city', 'Boston');
console.log(userMap);  // Map(3) { 'name' => 'Alice', 'age' => 30, 'city' => 'Boston' }

// 2. get() - Retrieve value by key
console.log(userMap.get('name'));   // 'Alice'
console.log(userMap.get('email'));  // undefined

// 3. has() - Check if key exists
console.log(userMap.has('age'));    // true
console.log(userMap.has('email'));  // false

// 4. delete() - Remove key-value pair
userMap.delete('city');
console.log(userMap.has('city'));   // false

// 5. size - Get number of entries
console.log(userMap.size);  // 2

// 6. clear() - Remove all entries
userMap.clear();
console.log(userMap.size);  // 0

/**
 * Q: How do you iterate over a Map?
 *
 * A: Maps are iterable and support multiple iteration methods:
 */

const scores = new Map([
  ['John', 85],
  ['Jane', 92],
  ['Bob', 78]
]);

// 1. for...of loop (entries by default)
for (const [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

// 2. forEach() method
scores.forEach((score, name) => {
  console.log(`${name}: ${score}`);
});

// 3. Iterate over keys
for (const name of scores.keys()) {
  console.log(name);
}

// 4. Iterate over values
for (const score of scores.values()) {
  console.log(score);
}

// 5. Iterate over entries (same as for...of default)
for (const entry of scores.entries()) {
  console.log(entry);  // ['John', 85]
}

/**
 * Q: How do you convert between Maps and Objects?
 *
 * A: Easy conversion using Object methods and Map constructor:
 */

const obj = { name: 'John', age: 30, city: 'NYC' };

// Object to Map
const mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj);  // Map(3) { 'name' => 'John', 'age' => 30, 'city' => 'NYC' }

// Map to Object
const objFromMap = Object.fromEntries(mapFromObj);
console.log(objFromMap);  // { name: 'John', age: 30, city: 'NYC' }

/**
 * Q: What are WeakMaps?
 *
 * A: WeakMaps are similar to Maps but with key differences:
 *    - Keys must be objects (not primitives)
 *    - Weak references (keys can be garbage collected)
 *    - No iteration methods (forEach, keys, values, entries)
 *    - No size property
 *    - No clear() method
 *    - Useful for private data or caching
 */

const weakMap = new WeakMap();
const keyObj = { id: 123 };
const valueObj = { data: 'secret' };

weakMap.set(keyObj, valueObj);
console.log(weakMap.get(keyObj));  // { data: 'secret' }

// Keys are weakly referenced - if keyObj is set to null,
// the entry can be garbage collected
// weakMap.set('string', 'value');  // Error: keys must be objects

/**
 * Q: When should you use a Map vs a plain Object?
 *
 * A:
 *    Use Map when:
 *    - Keys are not strings/symbols (objects, functions, etc.)
 *    - You need to maintain insertion order
 *    - Frequent additions/deletions of key-value pairs
 *    - You need to know the size quickly
 *    - Keys might be user-provided or computed
 *
 *    Use Object when:
 *    - All keys are strings/symbols
 *    - You need JSON serialization
 *    - Working with existing object-based APIs
 *    - Simple key-value storage with known keys
 */

/**
 * Q: What is the time complexity of Map operations?
 *
 * A:
 *    - set(): O(1) average case
 *    - get(): O(1) average case
 *    - has(): O(1) average case
 *    - delete(): O(1) average case
 *    - size: O(1)
 *    - clear(): O(n)
 *    - Iteration: O(n)
 */

/**
 * Q: How do you use Map for frequency counting?
 *
 * A: Maps are perfect for counting occurrences:
 */

const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const frequency = new Map();

for (const word of words) {
  frequency.set(word, (frequency.get(word) || 0) + 1);
}

console.log(frequency);  // Map(3) { 'apple' => 3, 'banana' => 2, 'cherry' => 1 }

// Get most frequent word
let maxCount = 0;
let mostFrequent = '';
for (const [word, count] of frequency) {
  if (count > maxCount) {
    maxCount = count;
    mostFrequent = word;
  }
}
console.log(`Most frequent: ${mostFrequent} (${maxCount} times)`);
