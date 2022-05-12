//Questions
var questions = [
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
var choiceA = $("#0");
var choiceB = $("#1");
var choiceC = $("#2");
var choiceD = $("#3");
var answerCheck = $("#answerCheck");

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
var scoreResult;
var questionIndex = 0;

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
};

//Questions page


//Listeners
startBtn.on('click', newQuiz);
console.log(timeLeft.textContent)