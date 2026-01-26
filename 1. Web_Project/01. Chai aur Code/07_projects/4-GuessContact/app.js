// 🎲 Generate random number between 1 and 10
let randNum = Math.floor(Math.random() * 10 + 1);

let rem = document.getElementById("r");
let prev = document.getElementById("p");
let form = document.getElementById("inp");
let container = document.getElementById("container");
let win = document.getElementById("win");
let lose = document.getElementById("lose");
let playAgain = document.getElementById("playAgain");

let remaining = 3;
let prevsArr = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let userGuess = parseInt(document.getElementById("userInput").value);

  if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
    alert("⚠️ Please enter a valid number between 1 and 10!");
    return;
  }

  // Add current guess to the list
  prevsArr.push(userGuess);
  prev.innerText = `Previous Guesses: ${prevsArr.join(", ")}`;

  if (userGuess === randNum) {
    container.style.display = "none";
    win.style.display = "block";
    playAgain.style.display = "inline-block";
  } else {
    remaining--;
    rem.innerText = `Guesses Remaining: ${remaining}`;
    if (remaining === 0) {
      container.style.display = "none";
      lose.style.display = "block";
      playAgain.style.display = "inline-block";
    }
  }

  // Clear input for next guess
  document.getElementById("userInput").value = "";
});

// 🔁 Play Again Button
playAgain.addEventListener("click", function () {
  remaining = 3;
  prevsArr = [];
  randNum = Math.floor(Math.random() * 10 + 1);
  console.log("New Random Number:", randNum);

  prev.innerText = "Previous Guesses: None";
  rem.innerText = "Guesses Remaining: 3";

  win.style.display = "none";
  lose.style.display = "none";
  playAgain.style.display = "none";
  container.style.display = "block";
});
