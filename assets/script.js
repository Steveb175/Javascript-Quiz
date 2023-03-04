// Preset Variables
var startButton = document.getElementById("start-button");
var time = document.getElementById("timer");
var instructions = document.getElementById("instructions");
var multipleChoice = document.getElementById("multiple-choice");
var timeLeft;

// Questions Object
var questions = [
  {
    question: "Javascript is an _______ language?",
    answers: [
      "Object-Oriented",
      "Object-Based",
      "Procedural",
      "None of the above",
    ],
    correctAnswer: "Object-Oriented",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: ["var", "let", "Both A and B", "None of the above"],
    correctAnswer: "Both A and B",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      "getElementById()",
      "getElementsByClassName()",
      "Both A and B",
      "None of the Above",
    ],
    correctAnswer: "getElementById()",
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answers: [
      "Throws an error",
      "Ignores the statements",
      "Gives a warning",
      "None of the above",
    ],
    correctAnswer: "Ignores the statements",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    answers: [
      "document.write()",
      "console.log()",
      "window.alert()",
      "All of the above",
    ],
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
        time.textContent = "";
        if ((gameOver = true)) {
          time.textContent = "";
        }
      }
    }
  }, 1000);
}

//Start Game Function
function startGame() {
  startButton.style.display = "none";
  instructions.style.display = "none";
  startTimer();
}

//Initial Function

//Test
console.log(questions);
