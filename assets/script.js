// Preset Variables
var startButton = document.getElementById("start-button");
var time = document.getElementById("timer");
var instructions = document.getElementById("instructions");
var questionElement = document.getElementById("question");
var questionsContainer = document.getElementById("questionContainer");
var answerButtonsContainer = document.getElementById(
  "answer-buttons-container"
);
var timeLeft = "";
let score = timeLeft;
var btn = document.getElementsByClassName("btn");
let currentQuestionIndex = 0;
var shuffledQuestions;

// Questions Array and Objects
const questions = [
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
      "None of the above",
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
  var timeLeft = 60;
  time.textContent = "Time: " + timeLeft;
  timeCurrent = setInterval(function () {
    if (timeLeft <= 60) {
      timeLeft--;
      time.textContent = "Time: " + timeLeft;
      if (timeLeft === 0) {
        clearInterval(timeCurrent);
        document.getElementById("question").textContent = "Game Over!";
        answerButtonsContainer.classList.add("hide");
        time.textContent = "";
        if ((gameOver = true)) {
          time.textContent = "";
          document.getElementById("question").textContent = "Game Over!";
          answerButtonsContainer.classList.add("hide");
        }
      }
    }
  }, 1000);
}

// Start Game Function
function startGame() {
  startButton.style.display = "none";
  instructions.style.display = "none";
  answerButtonsContainer.classList.remove("hide");
  startTimer();
  renderNextQuestion();
}

// Next Question Function
function renderNextQuestion() {
  showQuestion(questions[currentQuestionIndex]);
}

// Show Question Function
function showQuestion(question) {
  questionElement.innerText = questions[currentQuestionIndex].question;
  for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.innerText = questions[currentQuestionIndex].answers[i];
    answerButton.classList.add("btn");
    answerButton.addEventListener("click", chooseAnswer);
    console.log(questions[0].answers.length);
    answerButtonsContainer.appendChild(answerButton);
  }
  answerButton.addEventListener("click", chooseAnswer);
}
// Choose Answer Function
function chooseAnswer(e) {
  var chosenButton = e.target;
  var correct =
    chosenButton.innerText === questions[currentQuestionIndex].correctAnswer;
  setSatusClass(document.body, correct);
}

// Correct or Wrong setStatus Class
function setSatusClass(element, correct) {
  if (correct) {
    currentQuestionIndex++;
    renderNextQuestion();
    if (currentQuestionIndex === 4) {
      window.location.href = "assets/Highscores.Html";
      timeLeft.push();
    }
  } else {
    timeLeft - 5;
    currentQuestionIndex++;
    renderNextQuestion();
    if (currentQuestionIndex === 4) {
      window.location.href = "assets/Highscores.Html";
      timeLeft.push();
    }
  }
}

// Default Function
function resetDefault() {
  while (answerButtonsContainer) {
    answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
  }
}
//Initial Function

console.log(questions[0].answers);

const highscores1 = document.getElementById("highscores-text");
const submitBtn = document.getElementById("submit-btn");
const out = document.getElementById("output");

// Render score function
function renderScore() {
  out.innerHTML = highscores1.value + " " + score;
}
submitBtn.addEventListener("click", renderScore);

function playAgain() {
  window.location.href = "../index.html";
}
