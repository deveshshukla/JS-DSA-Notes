'use strict';

/**
 * ============================================================================
 * JAVASCRIPT OBJECTS - INTERVIEW GUIDE
 * ============================================================================
 */

/**
  Que: What is a JavaScript Object?

  Ans: A JavaScript object is a collection of key-value pairs where each key is a string (or symbol) and values can be any data type. Objects are reference types and are fundamental to JavaScript.

    Key Characteristics:
    - Unordered collection of properties
    - Keys are strings or symbols
    - Values can be primitives, objects, or functions
    - Mutable (properties can be added, modified, deleted)
    - Reference type (passed by reference)
 */

/**
  Q: How do you create an Object in JavaScript?

  A: There are multiple ways to create objects:
 */

// 1. Object Literal (Recommended)
const obj1 = {};                           // Empty object
const obj2 = { name: 'John', age: 30 };   // Object with properties
const obj3 = {
  name: 'Alice',
  greet: function() { return 'Hello'; }
}; // Object with method

// 2. Object Constructor
const obj4 = new Object();                  // Empty object
const obj5 = new Object({ name: 'Bob' });  // With initial properties

// 3. Object.create()
const obj6 = Object.create(null);          // Object with no prototype
const obj7 = Object.create(obj2);          // Object inheriting from obj2

// 4. Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const obj8 = new Person('Charlie', 25);

// 5. Class (ES6+)
class Animal {
  constructor(name) {
    this.name = name;
  }
}
const obj9 = new Animal('Dog');

/**
 Que: What are the important Object methods?

 Ans: JavaScript provides many static methods on the Object constructor and prototype methods.
 */

// Static Methods (called on Object):
// - Object.keys(): Get array of property names
// - Object.values(): Get array of property values
// - Object.entries(): Get array of [key, value] pairs
// - Object.assign(): Copy properties from sources
// - Object.create(): Create object with prototype
// - Object.freeze(): Prevent modifications
// - Object.seal(): Prevent adding/removing properties
// - Object.is(): Compare values
// - Object.hasOwn(): Check if property exists

// Prototype Methods (called on object instances):
// - hasOwnProperty(): Check if property is own (not inherited)
// - toString(): Convert to string
// - valueOf(): Get primitive value

/**
  Que: What are important object methods with examples?

  Ans: Here are the most commonly used object methods:
 */

const person = { name: 'John', age: 30, city: 'NYC' };

// 1. Object.keys() - Get array of property names
const keys = Object.keys(person);
console.log(keys);  // ['name', 'age', 'city']

// 2. Object.values() - Get array of property values
const values = Object.values(person);
console.log(values);  // ['John', 30, 'NYC']

// 3. Object.entries() - Get array of [key, value] pairs
const entries = Object.entries(person);
console.log(entries);  // [['name', 'John'], ['age', 30], ['city', 'NYC']]

// 4. Object.assign() - Copy properties from sources
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target);  // { a: 1, b: 2, c: 3 }

// 5. Object.create() - Create object with prototype
const proto = { greet: function() { return 'Hello'; } };
const obj = Object.create(proto);
obj.name = 'Alice';
console.log(obj.greet());  // 'Hello'

// 6. Object.freeze() - Prevent any modifications
const frozen = Object.freeze({ x: 1, y: 2 });
frozen.x = 10;  // No effect
frozen.z = 3;   // No effect
console.log(frozen);  // { x: 1, y: 2 }

// 7. Object.seal() - Prevent adding/removing properties
const sealed = Object.seal({ a: 1, b: 2 });
sealed.a = 10;  // Works
sealed.c = 3;   // No effect
console.log(sealed);  // { a: 10, b: 2 }

// 8. Object.is() - Compare values (handles edge cases better than ===)
console.log(Object.is(0, -0));        // false
console.log(Object.is(NaN, NaN));     // true
console.log(Object.is(null, null));   // true

// 9. Object.hasOwn() - Check if property exists (ES2022+)
console.log(Object.hasOwn(person, 'name'));  // true
console.log(Object.hasOwn(person, 'toString'));  // false (inherited)

/**
 * Q: How do you access and modify object properties?
 *
 * A: There are two main ways to access properties:
 */

// Dot notation (preferred for known properties)
const user = { name: 'John', age: 30 };
console.log(user.name);    // 'John'
user.age = 31;             // Modify
user.city = 'Boston';      // Add new property

// Bracket notation (required for dynamic keys)
const key = 'name';
console.log(user[key]);    // 'John'
user['first name'] = 'John';  // Keys with spaces
user[key.toUpperCase()] = 'Jane';  // Dynamic keys

/**
 * Q: What is object destructuring?
 *
 * A: Destructuring extracts properties from objects into variables.
 */

const person2 = { name: 'Alice', age: 25, city: 'LA' };

// Basic destructuring
const { name, age } = person2;
console.log(name, age);  // 'Alice' 25

// With default values
const { name: fullName, country = 'USA' } = person2;
console.log(fullName, country);  // 'Alice' 'USA'

// Rest operator
const { city, ...rest } = person2;
console.log(city);   // 'LA'
console.log(rest);   // { name: 'Alice', age: 25 }

/**
 * Q: How do you iterate over object properties?
 *
 * A: Several ways to iterate through object properties:
 */

const car = { make: 'Toyota', model: 'Camry', year: 2020 };

// 1. for...in loop (includes inherited properties)
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

// 2. Object.keys() with forEach
Object.keys(car).forEach(key => {
  console.log(`${key}: ${car[key]}`);
});

// 3. Object.entries() with for...of
for (const [key, value] of Object.entries(car)) {
  console.log(`${key}: ${value}`);
}

/**
 * Q: What is the difference between hasOwnProperty and in operator?
 *
 * A:
 *    in operator: Checks if property exists in object or its prototype chain
 *    hasOwnProperty(): Checks if property is directly on the object (not inherited)
 */

const obj10 = { a: 1 };
console.log('a' in obj10);              // true
console.log(obj10.hasOwnProperty('a')); // true
console.log('toString' in obj10);       // true (inherited)
console.log(obj10.hasOwnProperty('toString')); // false

/**
 * Q: What are object property descriptors?
 *
 * A: Property descriptors define how a property behaves (writable, enumerable, configurable).
 */

const obj11 = {};

// Define property with descriptor
Object.defineProperty(obj11, 'name', {
  value: 'John',
  writable: true,      // Can modify value
  enumerable: true,    // Shows in for...in and Object.keys
  configurable: true   // Can delete property
});

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(obj11, 'name');
console.log(descriptor);
// { value: 'John', writable: true, enumerable: true, configurable: true }

/**
 * Q: What is object cloning? How do you clone an object?
 *
 * A: Object cloning creates a copy. Objects are reference types, so assignment creates reference.
 */

const original = { a: 1, b: 2 };
const reference = original;  // Not a clone
reference.c = 3;
console.log(original);  // { a: 1, b: 2, c: 3 } - ORIGINAL MODIFIED!

// Shallow clone methods:
const clone1 = Object.assign({}, original);
const clone2 = { ...original };

// Deep clone (for nested objects):
const clone3 = JSON.parse(JSON.stringify(original));

/**
 * Q: What is the time complexity of common object operations?
 *
 * A:
 *    - Property access: O(1) average case
 *    - Property insertion: O(1) average case
 *    - Property deletion: O(1) average case
 *    - Object.keys()/values()/entries(): O(n)
 *    - hasOwnProperty(): O(1)
 *    - for...in loop: O(n)
 */

