var startButton = document.querySelector("#start");
var container = document.querySelector("#start-screen");
var questionsAll = document.querySelector("#questions");
var answerContainer = document.querySelector("#choices");
var questionTitle = document.querySelector("#question-title");
var timeEl = document.querySelector('#time');
var currentQuestionIndex = 0;

//create an event listener that can iterate over the questions when "start quiz is clicked"
//if we get type = " button", we do not need event prevent default
startButton.addEventListener("click",startQuiz);

function startQuiz(){
    displayQuestion();
    //need the timer here 

    // var timerInterval = setInterval(function() {
    //     secondsLeft--;
    //     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
    
    //     if(secondsLeft === 0) {
    //       // Stops execution of action at set interval
    //       clearInterval(timerInterval);
    //       // Calls function to create and append image
    //       sendMessage();
    //     }
    
    //   }, 1000);
    // }
    
    // use timer for scoring - when they give a wrong answer, take out of their time and alert them. 
    // 
    // collect the points of the answers
    questionsAll.classList.remove("hide");
};

function displayQuestion(){
    var ul = document.createElement("ul");

    for(var i = 0; i < questions[currentQuestionIndex].answers.length; i++){
        var li = document.createElement("li");
        li.textContent = questions[currentQuestionIndex].answers[i];
        li.addEventListener('click', function(event){
            // how to target the li as it is but only the text inside the li
            
            if(event.target.value === questions.correctAnswerIndex){
                console.log(questions.correctAnswerIndex);
            } 
            // i need to work out how to change the questions once clicked
            //check how to take the answer and find out if it's the correct one
            //if the correct one add 5 seconds,
            //if the wrong one take 10 seconds.
            //I still need to change something and move arround, but most of the code is here.
        })
        ul.appendChild(li);
        };
    answerContainer.appendChild(ul);

    questionTitle.textContent = questions[currentQuestionIndex].question;
    questionsAll.classList.remove("hide");
}






// when the start quiz button is clicked, the first questions should pop on the screen from questions.js
// need to use appendChild and innerHTML the questions to the main html class questions which is questionsAll now. 

console.log(questions);

// iterate over the list of questions
    // if a user clicked on an answer
    // check the text of the answer (or maybe some data property)
    // compare that value to the correct answer
    // if (the thing the user answered is correct)
    //    display correct!
    // else
    //    display incorrect
    //    subtract time