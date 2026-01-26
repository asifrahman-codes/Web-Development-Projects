
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()  where sayMyName is reference and () are execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
//----------------------------------------
function addTwoNumbers(num1,num2){
    console.log(num1+num2);     // 9
}
let results = addTwoNumbers(4,5);
console.log(results);  // output: Undefined because we donot return
// output: 9 and undefined
// ---------------------------------------
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);   8

//-------------------------------------------------------------
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("hitesh")   => Nothing happened when we donot print here or in function just return
// console.log(loginUserMessage("hitesh"))  => Ovveride and print hitesh just logged in

//---------------------------------------------------------------
function calculateCartPrice(...num1){  // rest operator(use when we do not know how many argument are comming)
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  => [200,400,500,2000]
//-------------
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  => [500,2000] because val1,val2 -->200,400 rest to num1

//--------------------------------------------------------------
const user = {            // Created object
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({           // call function and inside Created + passed direct object to handleObject function
    username: "sam",
    price: 399
})

// Now pass array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  // 400
console.log(returnSecondValue([200, 400, 500, 1000])); // 400