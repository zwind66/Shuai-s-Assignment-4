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

//getElementById
var timer = $("#timer");
var timesUp = $("#timesUp");

var startDiv = $("#start");
var startQuizBtn = $("#start-quiz-button");

var questionDiv = $("#questionDiv");
var questionTitle = $("#questionTitle");
var choiceA = $("#0");
var choiceB = $("#1");
var choiceC = $("#2");
var choiceD = $("#3");
var answerCheck = $("#answerCheck");

var summary = $("#summary");
var submitInitialBtn = $("#submitInitialBtn");
var initialInput = $("#initialInput");
var everything = $("#everything");

var highScoreSection = $("#highScoreSection");
var finalScore = $("#finalScore");

var goBackBtn = $("#goBackBtn");
var clearHighScoreBtn = $("#clearHighScoreBtn"); 
var viewHighScore = $("#viewHighScore");
var listOfHighScores = $("#listOfHighScores");