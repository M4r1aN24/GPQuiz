var startButton = document.querySelector("#start");
var container = document.querySelector("#start-screen");
var questionsAll = document.querySelector("#questions");
var answerContainer = document.querySelector("#choices");
var questionTitle = document.querySelector("#question-title");
var mainWrapper = document.querySelector ('#wrapper');
var timeEl = document.querySelector("#timer");
var currentQuestionIndex = 0;
var secondsLeft = 60;
var choiceBtn;
var choiceContainer;

var timeInterval = setInterval(function () {
  if (timeLeft > 1) {
    timeEl.textContent = secondsLeft;
    secondsLeft--;
  } else if (secondsLeft === 1) {
    
    timeEl.textContent = secondsLeft + ' second remaining';
    secondsLeft--;
  } else {
    timeEl.textContent = '';
    clearInterval(timeInterval);
  }
}, 1000);


startButton.addEventListener("click", startQuiz, setInterval);

function startQuiz() {
  displayQuestion();
  
  
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
    questionTitle.classList.add("hide");
}

answerContainer.onclick = getQuestion;

