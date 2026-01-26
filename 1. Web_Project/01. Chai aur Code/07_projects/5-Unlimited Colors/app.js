const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId = null;

// global function
function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
}

const startChangingColor = function(){
    if(intervalId === null){         // only start if no interval running
        intervalId = setInterval(changeBgColor, 1000);
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;               // reset properly
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);




/*
4️⃣ Generate one random HEX character each loop
color += hex[Math.floor(Math.random() * 16)];


Break it down:

🔹 Math.random() * 16

Gives a random number from 0 to 15 (because 16 values in hex).

Example:
0 → 2.5 → 14.9 → etc.

🔹 Math.floor(...)

Converts to whole number (0–15).

🔹 hex[...]

Picks the character from the hex string.

Example:

Random number	hex[...]	Character
3	             hex[3]	      3
10	             hex[10]	  A
15	             hex[15]	  F

So you build a color like:

# + A + F + 3 + 9 + E + 1 = #AF39E1
*/