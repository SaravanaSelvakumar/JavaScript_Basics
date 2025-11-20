console.log(name);

// using var can lead to unexpected behavior due to hoisting
// we can call the variable before its declaration

var name = "John";
console.log(name);

function testVar() {
  // local scope {}
  // when creating a variable with a same name inside a scope {}
  // it will take the local scope value not the global one
  var name = "Doe";
  // prints scope variable name op: Doe
  console.log(name);
}
testVar();

// prints global scope variable name op: john
console.log(name);

// **************************************************************  //

//             console.log(age);
// using let prevents hoisting issues and leads to error
// ReferenceError: Cannot access 'age' before initialization

let age = 10;
console.log(age);

age = 20;
console.log(age);

function testLet() {
  // prints scope variable gender op: female
  let age = 30;
  console.log(age);
}
testLet();

// prints global variable age op: 20
console.log(age);

// **************************************************************  //

// const is immutable variable
// can't be reassigned after declaration

const gender = "male";

// gender = 20;
//this will throw an error
// TypeError: Assignment to constant variable gender = 20.

function testConst() {
  const gender = "female";
  // prints scope variable gender op: female
  console.log(gender);
}
// prints global variable gender op: male
console.log(gender);
testConst();
