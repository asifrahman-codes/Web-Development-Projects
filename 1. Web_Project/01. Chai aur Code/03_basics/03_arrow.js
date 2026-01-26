const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  => {} --> due to global

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); --> undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  --> undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);  // {}
}
// chai()

//--------------------Arrow Function-------------------

// () => {} --> basic arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// another way, when curly braces then return, when () then not return like below
// const addTwo = (num1, num2) =>  num1 + num2    --> implicit

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()