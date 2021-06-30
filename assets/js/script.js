// Create objects for each question
var questionA = {
    question: "a",
    correctA: "0",
    answers: [0, 1, 2, 3]
};

var questionB = {
    question: "b",
    correctA: "0",
    answers: [0, 1, 2, 3]
};

var questionC = {
    question: "c",
    correctA: "0",
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
var currentQuestion;

// Start the game when button is clicked
startGameBtn.addEventListener('click', function () {
    startTimer();
    displayQuestion(questions[currentQuestion]);
})

// when an answer is clicked
questionsEl.addEventListener('click', function (e) {
    var element = e.target;
    // check if an answer was clicked inside the questions element
    if (element.tagName === 'LI') {
        console.log(element.getAttribute('data-index'));
        console.log(questions[currentQuestion].correctA);
        // check if the answer is correct
        if (element.getAttribute('data-index') === questions[currentQuestion].correctA) {
            console.log("you guessed it");
        } else {
            console.log("wrong");
        }
        nextQuestion();
    }
})

// set time to 100, update the timer element and then start the countdown
function startTimer() {
    currentQuestion = 0;
    timeLeft = 10;
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
        endGame();
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

function nextQuestion() {
    // if there are still questions left
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(questions[currentQuestion]);
    } else {
        // end game as there are no questions
        clearInterval(gameTimer);
        endGame();
    }
}

function endGame() {
    questionsEl.innerHTML = "";
    var endHeading = document.createElement("h1");
    var endP = document.createElement("p");
    var endInput = document.createElement("input");
    var endBackBtn = document.createElement("button");
    var endSubmitBtn = document.createElement("button");

    endHeading.textContent = "All Done!";
    endP.textContent = "Your score was: " + timeLeft;

    questionsEl.appendChild(endHeading);
    questionsEl.appendChild(endP);
    questionsEl.appendChild(endBackBtn);
    questionsEl.appendChild(endSubmitBtn);

}

