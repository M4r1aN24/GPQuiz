var startButton = document.querySelector("#start");
var container = document.querySelector("#start-screen");
var questionsAll = document.querySelector("#questions");
var userResponse = document.querySelector("#choices");
var score = parseInt('');
//create an event listener that can iterate over the questions when "start quiz is clicked"


for(var i = 0; i < questions.lenght; i++){

var questionsAll = questions[i];

var ul = document.createElement("ul");
questionsAll.appendChild(ul);


var li = document.createElement("li");
ul.appendChild(li);
li.textContent = questions;
li.setAttribute("data-index", i);

console.log(li);
}


startButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log('button clicked');
});
// when the start quiz button is clicked, the first questions should pop on the screen from questions.js
// need to use appendChild and innerHTML the questions to the main html class questions which is questionsAll now. 

console.log(questions);

// need to create a function that adds point for every question's correct answer. 


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isWin && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
//   }
  


// iterate over the list of questions
    // if a user clicked on an answer
    // check the text of the answer (or maybe some data property)
    // compare that value to the correct answer
    // if (the thing the user answered is correct)
    //    display correct!
    // else
    //    display incorrect
    //    subtract time