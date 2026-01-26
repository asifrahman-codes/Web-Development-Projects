const button = document.querySelector("button"); // select the button

button.addEventListener("click", (event) => {
  event.preventDefault(); // stop form refresh

  // get selected radio button
  const selected = document.querySelector('input[name="ans"]:checked');
  const result = document.getElementById("result");

  if (selected) {
    const answer = selected.value; // get chosen option
    const correct = "Beijing";     // correct answer

    result.style.display = "block";

    if (answer === correct) {
      result.innerText = "✅ Correct! The capital is " + correct + ".";
      result.style.color = "green";
    } else {
      result.innerText = "❌ Wrong! You chose " + answer;
      result.style.color = "red";
    }
  } else {
    result.style.display = "block";
    result.innerText = "⚠️ Please select an answer first!";
    result.style.color = "orange";
  }
});
