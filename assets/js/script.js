// Create objects for each question
var questionA = {
    question: "a",
    correctA: 0,
    answers: [0, 1, 2, 3]
};

var questionB = {
    question: "b",
    correctA: 0,
    answers: [0, 1, 2, 3]
};

var questionC = {
    question: "c",
    correctA: 0,
    answers: [0, 1, 2, 3]
};

// store all questions in array
var questions = [questionA, questionB, questionC];

// Store html elements in variables
var startGameBtn = document.querySelector("#start-game");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");

// initalise variables
var timeLeft;
var currentQuestion = 0;

// Start the game when button is clicked
startGameBtn.addEventListener('click', function () {
    startTimer();
    displayQuestion(questions[currentQuestion]);
})

// set time to 100, update the timer element and then start the countdown
function startTimer() {
    timeLeft = 100;
    timerEl.textContent = timeLeft;
    gameTimer = setInterval(countDown, 1000);
}
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

// displays the question which is passed to it in the html
function displayQuestion(q) {
    // clear the current content
    questionsEl.innerHTML = "";
    // generate html elements from question
    var questionh2 = document.createElement("h2");
    var questionList = document.createElement("ul");
    questionh2.textContent = q.question;
    for (var i = 0; i < q.answers.length; i++) {
        var answer = document.createElement("li");
        answer.textContent = q.answers[i];
        answer.setAttribute("data-index", i);
        questionList.appendChild(answer);
    }
    // appends html elements to the page
    questionsEl.appendChild(questionh2);
    questionsEl.appendChild(questionList);
}

