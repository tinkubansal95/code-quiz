var scoresEl = document.querySelector(".scores");
var timerEl = document.querySelector(".timeLeft");
var displayPageEl = document.querySelector(".displayPage");
var headerEl;
var descriptionEl;
var startQuizEl;
var quizEl;
var choice1El;
var choice2El;
var choice3El;
var choice4El;
var saveScoreEl;
var highScoreListEl;
var inputInitialsEl;
var scoreResultEl;
var headerResultEl;
var enterInitialsEl;
var goBackEl;
var clearHighScoreEl;

var scores = [];
var quizNumber;
var secondsLeft = 0;
var timerInterval;
 
 var quiz = [
                            {     question : "Which type of JavaScript language is?",
                                 answer : "Object-Based",
                                 choice1 : "Object-Oriented",
                                 choice2 : "Object-Based",
                                 choice3 : "Assembly-language",
                                 choice4 : "High-level"},
                   {     question : "Which of the following variables takes precedence over the others if the names are the same?",
                                 answer : "The local element",
                                 choice1 : "The local element",
                                 choice2 : "Global variable",
                                 choice3 : "The two of the above",
                                  choice4 : "None of the above"},
                    {     question : "In the JavaScript, which one of the following is not considered as an error:",
                                 answer : "Division by zero",
                                 choice1 : "Missing of semicolons",
                                 choice2 : "Syntax error",
                                 choice3 : "Division by zero",
                                 choice4 : "Missing of Bracket"},
                    {     question : "In JavaScript the x===y statement implies that:",
                                 answer : "Both are equal in the value and data type.",
                                 choice1 : "Both are equal in the value and data type.",
                                 choice2 : "Both x and y are equal in value, type and reference address as well.",
                                 choice3 : "Both are x and y are equal in value only.",
                      choice4 : "Both are not same at all."},
                    {     question : 'What we will get if we compare the "one" with "8" using the less than operator ("one"<8)?',
                                 answer : "False",
                                 choice1 : "False",
                                 choice2 : "True",
                                 choice3 : "NaN",
                      choice4 : "Undefined"},
                   {     question : "What are the three important manipulations for a loop on a loop variable?",
                                 answer : "Initialization, Testing, Updation",
                                 choice1 : "Updation, Incrementation, Initialization",
                                 choice2 : "Initialization, Testing, Incrementation",
                                 choice3 : "Testing, Updation, Testing",
                      choice4 : "Initialization, Testing, Updation"},
                   {     question : "Which company developed JavaScript?",
                                 answer : "Netscape",
                                 choice1 : "Netscape",
                                 choice2 : "Bell Labs",
                                 choice3 : "Sun Microsystems",
                      choice4 : "IBM"},
                   {     question : "Inside which HTML element do we put the JavaScript?",
                                 answer : "script",
                                 choice1 : "head",
                                 choice2 : "script",
                                 choice3 : "body",
                      choice4 : "style"},
                    {     question : "Which of the following is not Javascript frameworks or libraries?",
                                 answer : "Cassandra",
                                 choice1 : "Polymer",
                                 choice2 : "Meteor",
                                 choice3 : "Cassandra",
                      choice4 : "jQuery"},
                     {     question : "Javascript is ideal to?",
                                 answer : "minimize storage requirements on the web server",
                                 choice1 : "make computations in HTML simpler",
                                 choice2 : "minimize storage requirements on the web server",
                                 choice3 : "increase the download time for the client",
                                 choice4 : "none of the mentioned"},
 ];

 function homePage(){
    // create elements for home page
    headerEl = document.createElement("h1");
    descriptionEl = document.createElement("span");
    startQuizEl = document.createElement("button");
    startQuizEl.setAttribute("class","startQuiz");

    headerEl.textContent = "Coding Quiz Challenge";
    descriptionEl.textContent = "Try to answer the following code-related question within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!";
    startQuizEl.innerHTML = "Start Quiz";

    displayPageEl.append(headerEl);
    displayPageEl.append(descriptionEl);
    displayPageEl.append(startQuizEl);
}

function startQuizAndTime(){
    secondsLeft = 100;
    timerEl.innerHTML = "Time left: "+ secondsLeft;
    timerEl.style.visibility = "visible";
    startTime();
    quizPage();  
}

function startTime() {
    timerInterval = setInterval(function() {
    secondsLeft--;
    //update Time
    timerEl.innerHTML = "Time left: "+ secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // if time is finished, end the quiz and call the result page
      resultPage();
    }
  }, 1000);
}

function quizPage(){
    // removes the elements of the main page
    headerEl.remove();
    descriptionEl.remove();
    startQuizEl.remove();

    // create elemnets for quiz page
    quizEl = document.createElement("h2");
    choice1El = document.createElement("button");
    choice2El = document.createElement("button");
    choice3El = document.createElement("button");
    choice4El = document.createElement("button");

    //set class of buttons to choice
    choice1El.setAttribute("class","options");
    choice2El.setAttribute("class","options");
    choice3El.setAttribute("class","options");
    choice4El.setAttribute("class","options");

    // apend question and options
    displayPageEl.append(quizEl);
    displayPageEl.append(choice1El);
    displayPageEl.append(choice2El);
    displayPageEl.append(choice3El);
    displayPageEl.append(choice4El);
    
    quizNumber = 8;
    displayQuiz();
}

function displayQuiz(){
    quizNumber++;

    // enter question and option values in their specific elements
    quizEl.textContent = quiz[quizNumber].question;
    choice1El.innerHTML = quiz[quizNumber].choice1;
    choice2El.innerHTML = quiz[quizNumber].choice2;
    choice3El.innerHTML = quiz[quizNumber].choice3;
    choice4El.innerHTML = quiz[quizNumber].choice4;

}

function validateAnswer(event){
    event.preventDefault();
    var optionClickedEl = event.target;
   
    // check if the one of the options is clicked
    if(optionClickedEl.matches("button") && optionClickedEl.classList.contains("startQuiz"))
    {
        startQuizAndTime();
    }
    else if(optionClickedEl.matches("button") && optionClickedEl.classList.contains("options")){
        // get the value of the selected element
        var optionSelected = optionClickedEl.textContent;
        if(optionSelected === quiz[quizNumber].answer){
            optionClickedEl.style.backgroundColor = 'Green'; 
        }
        else{
            optionClickedEl.style.backgroundColor = 'Red'; 
            secondsLeft = secondsLeft - 10;     
            timerEl.innerHTML = "Time left: "+ secondsLeft;
        }
        setTimeout(function() { 
            optionClickedEl.style.backgroundColor = 'white'; 
            if(quizNumber < (quiz.length - 1)){
                displayQuiz();
            }
            else{
                // if all the questions are done, clear time interval and call the result page
                clearInterval(timerInterval);
                resultPage(); 
            }}, 500);        
    }
    else if(optionClickedEl.matches("button") && optionClickedEl.classList.contains("saveScore")){
        displayHighScores();
    }
    else if(optionClickedEl.matches("button") && optionClickedEl.classList.contains("goBack")){
        headerResultEl.remove();
        highScoreListEl.remove();
        goBackEl.remove();
        clearHighScoreEl.remove();
        homePage();
    }
    else if(optionClickedEl.matches("button") && optionClickedEl.classList.contains("clearHighScore")){
        scores = [];
        highScoreListEl.remove();
    }

    
}

function resultPage(){
    quizEl.remove();
    choice1El.remove();
    choice2El.remove();
    choice3El.remove();
    choice4El.remove();

    headerResultEl = document.createElement("h2");
    headerResultEl.textContent = "All Done!";

    scoreResultEl = document.createElement("p");
    scoreResultEl.textContent = "Your final score is "+secondsLeft+".";

    enterInitialsEl = document.createElement("p");
    enterInitialsEl.textContent = "Enter Initials: ";

    inputInitialsEl = document.createElement("input");
    inputInitialsEl.setAttribute("type","text");

    saveScoreEl = document.createElement("button");
    saveScoreEl.setAttribute("class","saveScore");
    saveScoreEl.textContent = "Submit";

    displayPageEl.append(headerResultEl);
    displayPageEl.append(scoreResultEl);
    displayPageEl.append(enterInitialsEl);
    displayPageEl.append(inputInitialsEl);
    displayPageEl.append(saveScoreEl);
}

function displayHighScores(){
    // remove previous elements
    scores.push({name: inputInitialsEl.value,
                 score : secondsLeft});

    scoreResultEl.remove();
    enterInitialsEl.remove();
    inputInitialsEl.remove();
    saveScoreEl.remove();
    timerEl.style.visibility = "hidden";

    headerResultEl.textContent = "Highscores";
    highScoreListEl = document.createElement("ul");
    
    //populate scores
    scores.forEach(function(item){
        var listItemEl = document.createElement("li");
        listItemEl.textContent = "1. "+ item.name +" - "+item.score;
        highScoreListEl.append(listItemEl);
    })

    goBackEl = document.createElement("button");
    goBackEl.setAttribute("class","goBack");

    clearHighScoreEl = document.createElement("button");
    clearHighScoreEl.setAttribute("class","clearHighScore");

    goBackEl.textContent = "Go Back";
    clearHighScoreEl.textContent = "Clear HighScore";

    displayPageEl.append(highScoreListEl);
    displayPageEl.append(goBackEl);
    displayPageEl.append(clearHighScoreEl);
}

homePage();

// event handler for answer selected
displayPageEl.addEventListener("click",validateAnswer);