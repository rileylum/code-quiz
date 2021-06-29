
// Create objects for each question
var questionA = {
    question: "a",
    correctA: 0,
    answers: [0, 1, 2, 3]
};

var questionB = {
    question: "a",
    correctA: 0,
    answers: [0, 1, 2, 3]
};

var questionC = {
    question: "a",
    correctA: 0,
    answers: [0, 1, 2, 3]
};

// Store html elements in variables
var startGameBtn = document.querySelector("#start-game");
var timerEl = document.querySelector("#timer");

// initalise variables
var timeLeft;

// Start the game when button is clicked
startGameBtn.addEventListener('click', function () {
    timeLeft = 100;
    timerEl.textContent = timeLeft;
    gameTimer = setInterval(countDown, 1000);
})

// Called from gameTimer Interval
function countDown() {
    // Decrement the timer
    timeLeft--;
    // update value in html
    timerEl.textContent = timeLeft;
    // stop the interval when time reaches one
    if (timeLeft === 0) {
        clearInterval(gameTimer);
    }
}