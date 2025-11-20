/* 

 There are 2 types of data types in javascript
 
 1. Primitive data types
 2. Non-primitive data types (reference data types)

 Primitive data types include:

Strings of text e.g. "This text string" etc.
Numbers, eg. 123, 120.50 etc.
Boolean e.g. true or false.
null
undefined
BigInt
Symbol
BigInt and Symbol are introduced in ES6. In ES5, there were only five primitive data types.

 Non-primitive data types include:

Object
Array
Date

*/

// String

let str1 = "Hello World!"; // Using double quotes
let str2 = "Hello World!"; // Using single quotes
let str3 = `Hello World!`; // Using backticks

// Number

let num1 = 10; // Integer
let num2 = 10.22; // Floating point number
let num3 = -5; // Negative number
// Example (Exponential notation of numbers)
let num4 = 98e4; // 980000
let num5 = 98e-4; // 0.0098

// Boolean

let bool1 = true;
let bool2 = false;

// Null

let houseNo = null; // Unknown house number
let apartment = "B-2";
appartment = null; // Updating the value to null

// Undefined

let undef1; // Value is undefined
let undef2 = undefined; // Value is undefined
let houseNo1; // Contains undefined value
let apartment1 = "Ajay";
apartment1 = undefined; // Assigning the undefined value

// bigInt

let bigInt1 = 1234567890123456789012345678901234567890n;
let largeNum = 1245646564515635412348923448234842842343546576876789n;

// Symbol

let sym1 = Symbol("123");
let sym2 = Symbol("123");
let res = sym1 === sym2;

console.log(res); // false
