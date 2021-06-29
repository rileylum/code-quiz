
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

var startGameBtn = document.querySelector("#start-game");
var timerEl = document.querySelector("#timer");
var timeLeft;

startGameBtn.addEventListener('click', function () {
    timeLeft = 100;
    timerEl.textContent = timeLeft;
    gameTimer = setInterval(countDown, 1000);
})

function countDown() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(gameTimer);
    }
}