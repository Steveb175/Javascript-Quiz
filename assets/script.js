// Preset Variables
var startButton = document.getElementById("start-button");
var time = document.getElementById("timer");
var instructions = document.getElementById("instructions");

//Objects

var answersSet = {
  answerOne: "Answer 1",
  answerTwo: "Answer 2",
  answerThree: "Answer 3",
  answerFour: "Answer 4",
};

// Timer Function
function startTimer() {
  var timeLeft = 10;
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

function startGame() {
  startButton.style.display = "none";
  instructions.style.display = "none";
  startTimer();
}

//Initial Function
