const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
/*
output: 
configurable: false
enumerable: false
value: 3.141592653589793
writable: false
*/

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);  3.14

//--------------------------------------------------
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai));  // undefined
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {  // if we not print
        
        console.log(`${key} : ${value}`);
    }
}