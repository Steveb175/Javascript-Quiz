// Preset Variables
var startButton = document.getElementById("start-button");
var time = document.getElementById("timer");
var instructions = document.getElementById("instructions");
var multipleChoice = document.getElementById("multiple-choice");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-button");
var timeLeft;
let score = timeLeft;
var btn = document.getElementsByClassName("btn");
let currentQuestionIndex;

// Questions Array and Objects
var questions = [
  {
    question: "Javascript is an _______ language?",
    answers: [
      { text: "Object-Oriented", correct: true },
      { text: "Object-Based", correct: false },
      { text: "Procedural", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",

    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "Both A and B", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",

    choice1: "getElementById()",
    choice2: "getElementsByClassName()",
    choice3: "Both A and B",
    choice4: "None of the Above",
    correctAnswer: "getElementById()",
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    choice1: "Throws an error",
    choice2: "Ignores the statements",
    choice3: "Gives a warning",
    choice4: "None of the above",
    correctAnswer: "Ignores the statements",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    choice1: "document.write()",
    choice2: "console.log()",
    choice3: "window.alert()",
    choice4: "All of the above",
    correctAnswer: "All of the above",
  },
];

// Timer Function
function startTimer() {
  var timeLeft = 2;
  time.textContent = "Time: " + timeLeft;
  timeCurrent = setInterval(function () {
    if (timeLeft <= 60) {
      timeLeft--;
      time.textContent = "Time: " + timeLeft;
      if (timeLeft === 0) {
        clearInterval(timeCurrent);
        document.getElementById("question").textContent = "Game Over!";
        time.textContent = "";
        if ((gameOver = true)) {
          time.textContent = "";
          document.getElementById("question").textContent = "Game Over!";
        }
      }
    }
  }, 1000);
}

// Start Game Function
function startGame() {
  startButton.style.display = "none";
  instructions.style.display = "none";
  startTimer();
  renderNextQuestion();
  currentQuestionIndex = 0;
}

// Next Question Function
function renderNextQuestion() {
  showQuestion(questions[currentQuestionIndex]);
}

// Show Question Function
function showQuestion(question) {
  questionElement.innerText = questions.question;
}

// Select Answer Function
function selectAnswer() {}
//Initial Function
