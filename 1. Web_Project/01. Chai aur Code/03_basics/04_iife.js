// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //output: DB CONNECTED


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')




/*________________________________________
⚡ What is an IIFE?
IIFE means Immediately Invoked Function Expression —
It’s a function that runs immediately after it is defined (without being called separately).
________________________________________
🧩 Normal function example:
function chai() {
    console.log("DB CONNECTED");
}
chai(); // You must call it separately
Here we define chai() first, then call it.
________________________________________
⚡ IIFE version:
(function chai() {
    console.log("DB CONNECTED");
})();
💥 In this case:
•	The function is wrapped in parentheses ( ... ) to make it an expression.
•	The () after it immediately executes the function.
✅ Output:
DB CONNECTED
________________________________________
🧠 Why use IIFE?
IIFE is used to:
1.	Execute code immediately without calling the function again.
2.	Avoid polluting the global scope —
The variables inside an IIFE exist only inside it, not globally.

__________________🔹 Types of IIFE______________________
🔹 Types of IIFE
1. Named IIFE
Has a function name (like chai):
(function chai(){
    console.log(`DB CONNECTED`);
})();
✅ Output:
DB CONNECTED
________________________________________
2. Anonymous or Arrow IIFE
Uses arrow function (no name):
(() => {
    console.log(`DB CONNECTED TWO`);
})();
✅ Output:
DB CONNECTED TWO
________________________________________
3. Parameterized IIFE
You can pass arguments too:
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');
✅ Output:
DB CONNECTED TWO hitesh
Here 'hitesh' is passed directly into the function —
no need to call it later.
________________________________________
⚙️ Why we use the semicolon ; between IIFEs
Notice this:
(function chai(){ ... })();
((name)=>{ ... })('hitesh');
The semicolon ; is important because:
•	JavaScript sometimes merges code if you write two IIFEs back-to-back.
•	Adding ; ensures the first IIFE ends completely before the next starts.
________________________________________
✅ Summary
Feature	Description
Full form	Immediately Invoked Function Expression
Purpose	Run a function immediately & keep variables private
Syntax	(function(){ ... })();
Arrow version	(() => { ... })();
With parameter	((param) => { ... })(value);
________________________________________
So your code 👇
(function chai(){
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');
🧾 Output:
DB CONNECTED
DB CONNECTED TWO hitesh
________________________________________
*/