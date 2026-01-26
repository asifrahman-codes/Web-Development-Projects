// after ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());  // "123abc"
console.log(chai.changeUsername());   // "CHAI"


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


/*
________________________________________
✅ 1. ES6 CLASS VERSION (Easy way)
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}` 
    }
}
What happens?
•	constructor() runs automatically when you use new User()
•	this.username, this.email, this.password → saved in the object
•	encryptPassword() and changeUsername() are methods of the class
Example:
const chai = new User("chai", "chai@gmail.com", "123");
chai.encryptPassword();   // "123abc"
chai.changeUsername();    // "CHAI"
________________________________________
⭐ IMPORTANT SECRET
Even though it looks like you are creating a class, JavaScript does not have real classes like Java or C++.
JavaScript classes are just a prettier way to use prototypes.
________________________________________
✅ 2. BEHIND THE SCENES VERSION (What JS really does)
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
What is happening here?
✔ Step 1: Constructor Function
function User(...) is a normal function used with new.
✔ Step 2: Adding methods using prototype
User.prototype.encryptPassword = function() {}
User.prototype.changeUsername = function() {}
These methods are shared by all objects, not copied again and again.
That means:
All users → use same shared function in memory.
Much more efficient!
________________________________________
🔥 So what is the difference between the two?
ES6 Class Syntax	Behind the Scenes
Modern	Old but real internal working
Easy and clean	Manual prototype handling
Looks like Java/Python class	Actually uses prototypes
Methods automatically go to prototype	You must add them manually
________________________________________
🧠 How JavaScript Executes the ES6 Class Code
JavaScript internally converts:
class User {
   constructor() {}
   encryptPassword() {}
   changeUsername() {}
}
Into:
function User() {}
User.prototype.encryptPassword = function() {}
User.prototype.changeUsername = function() {}
So both programs are identical in behavior.
________________________________________
🔍 Final Concept in Simple Words
📌 ES6 Class Version
Looks modern → automatically manages prototype.
📌 Prototype Version
Raw version → you manually attach methods to prototype.
________________________________________
💯 Final Summary
•	class is only syntax sugar.
•	JavaScript still uses function constructor + prototype internally.
•	Methods are stored in the prototype, not inside the object.
•	Both chai and tea share the same method functions in memory.
________________________________________
*/