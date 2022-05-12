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
var choiceA = $("#0");
var choiceB = $("#1");
var choiceC = $("#2");
var choiceD = $("#3");
var lineBreak = $("#lineBreak");
var answerCheck = $("#answerCheck");
var next = $("#next");

var score = $("#score");
var submitBtn = $("#submit-btn");
var initialInput = $("#initialInput");
var finalScore = $("#finalScore");

var Highscores = $("#Highscores");
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
    initialInput.textContent = "";

    start.addClass("d-none");
    questions.removeClass("d-none");

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.text(totalTime);
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
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
    lineBreak.removeClass("d-none");
    answerCheck.removeClass("d-none");
    next.removeClass("d-none");

    if (questionsList[questionIndex].answer === questionsList[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAns += 20;
        // console.log(correctAns);
        answerCheck.text("Correct!");
    } else {
        // wrong answer, deduct 10 second from timer
        totalTime -= 10;
        correctAns -=5;
        timeLeft.text(totalTime);
        answerCheck.text("Wrong! The correct answer is: " + questionsList[questionIndex].answer);
    }
}

function nextone() { 
    questionIndex ++;
    // repeat with the rest of questions 
    if (questionIndex < questionsList.length) {
        showQuiz();
    } else {
        // if no more question, run game over function
        gameOver();
    }
    
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

    // show final score
    finalScore.text(correctAns);
}

//Listeners
startBtn.on("click", newQuiz);
choiceA.on("click", chooseA);
choiceB.on("click", chooseB);
choiceC.on("click", chooseC);
choiceD.on("click", chooseD);
next.on("click",nextone);
console.log()