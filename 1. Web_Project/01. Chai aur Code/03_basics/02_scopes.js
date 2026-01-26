let A = 10
const b = 20
var c = 30
// console.log(a);
// console.log(b);
// console.log(c);      normally printed all

//-----------------------
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); --> 10 due block scop
    
}

// console.log(a);   --> 300 global scope
// console.log(b);  --> error not accessble 
// console.log(c);

// Nested Scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);  // => hitesh
    }
    // console.log(website);  error

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); ---> Error
}

// console.log(username);  ---> error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))    // 6

function addone(num){
    return num + 1
}



addTwo(5)      //  ==> Error
const addTwo = function(num){
    return num + 2
}
