var startButton = document.querySelector("#start");
var container = document.querySelector(".start");


//create an event listener that can iterate over the questions when pressted "start quiz."

startButton.addEventListener('click', function() {
    questions++;


});

// iterate over the list of questions
    // if a user clicked on an answer
    // check the text of the answer (or maybe some data property)
    // compare that value to the correct answer
    // if (the thing the user answered is correct)
    //    display correct!
    // else
    //    display incorrect
    //    subtract time

    console.log(questions);

    localStorage.setItem("testItem", "abcdefghijkl");