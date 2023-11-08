var startButton = document.querySelector("#start");
var container = document.querySelector("#start-screen");
var questionsAll = document.querySelector("#questions");
var answerContainer = document.querySelector("#choices");
var questionTitle = document.querySelector("#question-title");
var timeEl = document.querySelector(".time");
var currentQuestionIndex = 0;
var secondsLeft = 60;
var choiceBtn;
var choiceContainer;

//create an event listener that can iterate over the questions when "start quiz is clicked"
//if we get type = " button", we do not need event prevent default
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  displayQuestion();
  //need the timer here

//   var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to create and append image
//         sendMessage();
//       }

//     }, 1000);
  
  container.classList.add("hide");
  questionsAll.classList.remove("hide");
}

function displayQuestion() {
choiceContainer = document.createElement("div");

  for (var i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    choiceBtn = document.createElement("button");
    choiceBtn.textContent = questions[currentQuestionIndex].answers[i];

    choiceContainer.appendChild(choiceBtn);
  }
  answerContainer.appendChild(choiceContainer);

  questionTitle.textContent = questions[currentQuestionIndex].question;
  questionsAll.classList.remove("hide");
}

function getQuestion(event) {
    currentQuestionIndex++;
    var currentQuestion = questions[currentQuestionIndex];
    answerContainer.innerHTML = "";
  

    if (time <= 0 || currentQuestionIndex === questions.length) {
        quizEnd();
      } else {
        displayQuestion();
      }
}

function quizEnd(){
    
}
questionTitle.classList.add("hide");
answerContainer.onclick = getQuestion;

