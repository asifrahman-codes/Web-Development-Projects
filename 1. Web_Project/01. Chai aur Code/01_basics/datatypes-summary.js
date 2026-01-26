//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
console.log(typeof outsideTemp);  // object

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // Array
let myObj = {              // Object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){         // store function in variable
    console.log("Hello world");
}
console.log(typeof myFunction);  // function
console.log(typeof heros);     //  object
console.log(typeof anotherId);  // symbol
console.log(typeof BigInt);  // undefined
console.log(typeof outsideTemp);  // object

// https://262.ecma-international.org/5.1/#sec-11.4.3



//====================================================================================
// ----------------------Memory type--------------
// Stack(primitive)--> copy, Heap(non primitive) --> Reference(original)

let myName = "asif"
let lastName = "Rahman"
console.log(lastName)  // Rahman

lastName = "Dawar"
console.log(myName)   // asif
console.log(lastName)  // dawar


let userOne = {
    email: "asifdawar321@gamil.com",
}
let userTwo = userOne;
userTwo.email = "dawar31@gmail.com"
console.log(userOne.email)  // "dawar31@gmail.com"
console.log(userTwo.email)  // "dawar31@gmail.com"

// Primitive Types:
// 1. Stored in stack.
// 2. Passed or assigned by value (call by value).
// 3. Changes to copies don't affect the original.

// Reference Types:
// 1. Stored in heap; accessed via references (stored in stack).
// 2. Changing the value through another reference affects the original.