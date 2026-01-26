//----------------- ⭐⭐⭐ Object Literals ⭐⭐⭐ -------------------------------
// An object literal in JavaScript is simply a way to create an object directly using curly braces {} without using a class or a constructor function.
// It is the most common and easiest way to create an object.

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);  // print all 
    }

}
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);  ---> {}  because nothing in global context


//---------------- ⭐⭐⭐ Constructor Function ⭐⭐⭐ -------------------------------------------------
function User(username, loginCount, isLoggedIn){
    this.username = username;       /// Properties
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);   /// Method

    }

    return this
}
// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne);  --> ChaiAurCode, 11, false because userTwo override it so add new to both and now constructor will give new instance , copy so you can do anything with that without effect other.

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

// The new keyword does four things: ⭐⭐
// 1.	Creates a new empty object
// 2.	Sets this inside the function to point to the new object
// 3.	Adds properties (name, age) to that object
// 4.	Returns the object automatically


/* ----⭐⭐⭐ What is a Constructor Function? ⭐⭐⭐------------------------
⭐ What is a Constructor Function?
A constructor function is a special type of function used to create multiple objects with the same structure.
Think of it like a template or blueprint for objects.
________________________________________
⭐ Simple Example
function User(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new User("Asif", 20);
const user2 = new User("Uzair", 22);

console.log(user1);
console.log(user2);
________________________________________
⭐ Explanation
1️⃣ You create a function (first letter usually capital)
function User(name, age) {
    this.name = name;
    this.age = age;
}
•	User is the constructor function
•	this creates properties for each object
•	No return needed (JS returns the object automatically)
________________________________________
2️⃣ You create objects using new
const user1 = new User("Asif", 20);

The new keyword does four things: ⭐⭐⭐⭐
1.	Creates a new empty object
2.	Sets this inside the function to point to the new object
3.	Adds properties (name, age) to that object
4.	Returns the object automatically
So user1 becomes:
{
  name: "Asif",
  age: 20
}
________________________________________
⭐ Why use Constructor Functions?
Because if you need many objects with the same structure, object literals become repetitive.
Example WITHOUT constructor:
const student1 = {name: "Asif", age: 20};
const student2 = {name: "Ali", age: 22};
const student3 = {name: "Uzair", age: 25};
Too much repetition ❌
Constructor fixes this:
function Student(name, age) {
    this.name = name;
    this.age = age;
}
Now create any number of students:
new Student("Asif", 20);
new Student("Ali", 22);
new Student("Uzair", 25);
________________________________________
⭐ Adding Methods (Important)
Instead of this (bad):
function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log("Hello");
    }
}
Better 👇 (saves memory):
User.prototype.sayHello = function() {
    console.log("Hello");
};
Now every object created by User gets this method.
________________________________________
⭐ Real-Life Example
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.start = function() {
    console.log(`${this.brand} ${this.model} started`);
};

const car1 = new Car("Honda", "Civic");
car1.start();
________________________________________
⭐ Summary (Very Simple)
Concept	Meaning
Constructor Function	Function used as a blueprint for objects
new	Creates the object using the constructor
this	Refers to the new object created
prototype	Used to add shared methods
________________________________________
If you want, I can also explain:
✔ difference between object literal & constructor
✔ prototype in detail
✔ class vs constructor function
*/