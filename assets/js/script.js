//Questions
var questionsList = [
    {
        question: "What is considered to be the most popular programming language in the world?",
        choices: ["a. <HTML>", "b. <Ruby>", "c. <Swift>", "d. <JavaScript>"],
        answer: "d. <JavaScript>"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
];

//Get element by Id
var timer = $("#timer");
var timeLeft =$("#timeLeft")
var timesUp = $("#timesUp");

var start = $("#start");
var startBtn = $("#start-btn");

var questions = $("#questions");
var question = $("#question");
var answerBtn = $("#answer-btn");
var choiceA = $("#0");
var choiceB = $("#1");
var choiceC = $("#2");
var choiceD = $("#3");
var lineBreak = $("#lineBreak");
var answerCheck = $("#answerCheck");
var next = $("#next");

var score = $("#score");
var submitBtn = $("#submit-btn");
var finalScore = $("#finalScore");

var highScores = $("#highScores");
var viewHighScore = $("#viewHighScore");
var listOfHighScores = $("#listOfHighScores");
var goBackBtn = $("#goBackBtn");
var clearHighScoreBtn = $("#clearHighScoreBtn"); 

// other variables
var correctAns = 0;
var questionNum = 0;
var questionIndex = 0;
var scoreResult;

//Start page
function newQuiz() {
    questionIndex = 0;
    totalTime = 75;
    timeLeft.text(totalTime);

    start.addClass("d-none");
    questions.removeClass("d-none");
    viewHighScore.addClass("d-none");

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.text(totalTime);
        if(totalTime <= 0) {
            clearInterval(startTimer);  
            gameOver();  
        }
    },1000);

    showQuiz();
}

//Questions page
function showQuiz() {
    question.text(questionsList[questionIndex].question) ;
    choiceA.text(questionsList[questionIndex].choices[0]);
    choiceB.text(questionsList[questionIndex].choices[1]);
    choiceC.text(questionsList[questionIndex].choices[2]);
    choiceD.text(questionsList[questionIndex].choices[3]);
}

//Show right or wrong answers
function checkAnswer(answer) {
    question.addClass("d-none");
    answerBtn.addClass("d-none");
    lineBreak.removeClass("d-none");
    answerCheck.removeClass("d-none");
    next.removeClass("d-none");

    if (questionsList[questionIndex].answer === questionsList[questionIndex].choices[answer]) {
        // correct answer, add 20 score to final score
        correctAns += 20;
        // console.log(correctAns);
        answerCheck.text("Correct!");
    } else {
        // wrong answer, deduct 10 second from timer
        totalTime -= 10;
        timeLeft.text(totalTime);
        answerCheck.text("Wrong! The correct answer is: " + questionsList[questionIndex].answer);
    }
}

//Next question
function nextone() { 
    questionIndex ++;
    // repeat with the rest of questions 
    if (questionIndex < questionsList.length) {
        showQuiz();
    } else {
        // if no more question, run game over function
        gameOver();
    }

    question.removeClass("d-none");
    answerBtn.removeClass("d-none");
    lineBreak.addClass("d-none");
    answerCheck.addClass("d-none");
    next.addClass("d-none");
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

//game over
function gameOver() {
    score.removeClass("d-none") ;
    questions.addClass("d-none");
    timer.addClass("d-none");
    timesUp.removeClass("d-none") ;

    totalTime = 0;
    timeLeft.text( totalTime);
    // show final score
    finalScore.text(correctAns);
}

//Storage score
function saveScore(event) {
    event.preventDefault();
    
    var initialInput = $("#initialInput").val();

    // Blank initial
    if (initialInput.length == 0){
        alert("Please enter your initials!");
        return;
    }
     // store scores into local storage
     var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput,
        score: correctAns
    };

    console.log(userScore);
    scoresArray.push(userScore);

    // stringify array in order to store in local
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // show current highscores
    showHighScores(); 
}

//show high scores
function showHighScores() {
    score.addClass("d-none");
    start.addClass("d-none");
    timesUp.addClass("d-none");
    highScores.removeClass("d-none");
    viewHighScore.addClass("d-none");
    timer.addClass("d-none");
    questions.addClass("d-none");
    
    correctAns = 0;

    var savedHighScores = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (i = 0; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.append(eachNewHighScore);
    }
}

//fo back
function goBack() {
    timer.removeClass("d-none");
    timesUp.addClass("d-none");
    viewHighScore.removeClass("d-none");
    start.removeClass("d-none");
    highScores.addClass("d-none");
    listOfHighScores.empty();
}
//Listeners
startBtn.on("click", newQuiz);
choiceA.on("click", chooseA);
choiceB.on("click", chooseB);
choiceC.on("click", chooseC);
choiceD.on("click", chooseD);
next.on("click",nextone);
submitBtn.on("click", function(event){
    saveScore(event);
});

goBackBtn.on("click", goBack);
viewHighScore.on("click",showHighScores);

clearHighScoreBtn.on("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.empty();
});
