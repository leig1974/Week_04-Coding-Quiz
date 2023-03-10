//creste a quiz class
// resources: class recordings, google search, internet, youtube turotials, github


var highscores = document.querySelector('.scores');
var timer = document.querySelector('#time');
var startButton = document.querySelector('.start');
var revealQuestion = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var question = document.getElementById('choices');
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var feedback = document.querySelector('#feedback');
var submitButton = document.querySelector('#submit-button');

console.log(finalScore);

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  // method
  guess(answer) {
    // console.log(quiz);
    // let questionObj = new Question()
    // if (questionObj.isCorrectAnswer(answer)) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

//create question class
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

//event listener for start button
startButton.addEventListener("click", function () {
  showQuestion();
  startTimer();
});

//display question
function displayQuestion() {
  // console.log(quiz);
  if (quiz.isEnded()) {
    showScores();
  } else {
    //show next question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    //show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById("choice"
        + i);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();

  }
};

//guess function
function guess(id, guess) {
  // console.log(quiz);
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    // let quizObj = new Quiz()
    // quizObj.guess(guess)
    displayQuestion();
  }
}

//show quiz progress function
function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById("progress");
  progressElement.innerHTML =
    `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

//show Score
function showScores() {
  let quizEndHTML =
    `
    <h1>Quiz Completed</h1>
    <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
    <a href="index.html">Take Quiz Again</a>
    </div>
    <p>
    <label for="initials-area">Enter Initials:</label>
    <input type="text" name="initials-area" maxlength="4" id="initials">
    <button id="submit-button" type="submit">Submit</button>
    </p>
  `;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
  // add event listener to submit button!!!!!
  
    
  }
  
//create quiz questions
var questions = [
  new Question(
    "A very useful tool used during development and debugging for printing content to the debugger is?",
    ["javaScript", "terminal/bash", "for loops", "console log"],
    "console log"
  ),

  new Question(
    "String values must be enclosed within ________ when being assigned to variables?",
    ["commas", "curly brackets", "quotes", "parentheses"],
    "quotes"
  ),

  new Question(
    "Arrays in JavaScript can be used to store?",
    ["numbers and strings", "other errays", "booleans", "all the the above"],
    "all of the above"
  ),

  new Question(
    "The condition in an if/else statement is enclosed within ____?",
    ["quotes", "curly brackets", "parentheses", "all the the above"],
    "curly brackets"
  ),

  new Question(
    "Commonly used data types DO NOT include?",
    ["strings", "booleans", "palerts", "numbers"],
    "palerts"
  )
];


let quiz = new Quiz(questions);

//display question
displayQuestion();

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    // display new time on page
    timeEl.textContent = time;


    feedbackEl.textContent = "Wrong!";
  } else {

    feedbackEl.textContent = "Correct!";
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  currentQuestionIndex++;

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}


//add a countdown
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIME: ${min} : ${sec}`;
    }
  }, 1000)
}

startCountdown();

function scoreQuiz() {
  clearInterval(timerInterval);
  newScore = numCorrect/quizContentLength * 100;
  quizStaticScoreEl.value = newScore;
};

function quizComplete() {
  scoreQuiz();
  quizQuestionLabelEl.textContent = 'Quiz Complete';
  quizCurrentQuestionEl.textContent = ''; // UPD from inner HTML to textContent
  quizSelectLabelEl.textContent = 'Save Your Score';
  quizFieldsetEl.textContent = ''; // UPD from inner HTML to textContent
  quizScoreFormEl.style.display = "block";
  quizResultsEl.textContent = ''; // UPD from inner HTML to textContent
  quizTimeRemainingEl.innerHTML = '<div class=""text-uppercase">PAUSED</div>'; //QUESTION: Is there a better way to do this that doesn't use inner HTML
  buttonStatetoSave();
};

function storeUserInitialVar() {
  if (userInitialsEl.value) {
      userInitialsValue = userInitialsEl.value;
      createScoreHistory();
  } else {
      //TO DO: Update This to inner HTML when I get this to run
      alert("Please Enter Your Initials and Press Save");
  }
};

function createScoreHistory() {
  let scoreHistoryArr = [];
  if (JSON.parse(localStorage.getItem('scoreHistory'))) {
  scoreHistoryArr.push(JSON.parse(localStorage.getItem('scoreHistory'))) 
  };
  let currentScore = {
      initials: userInitialsValue,
      score: newScore
  };
  scoreHistoryArr.push(currentScore);
  localStorage.setItem('scoreHistory', JSON.stringify(scoreHistoryArr));
  renderHighScore();
};

function renderHighScore() {
  locStoreInitials = JSON.parse(localStorage.getItem('initials'));
  locStoreScore = JSON.parse(localStorage.getItem('score'));
  if (!locStoreInitials || !locStoreScore) {
      return;
  } else {
      //TO DO: Properly Populate Bootstrap Grid. For now, populate one field.
      outputHSInitials1.innerHTML = locStoreInitials;
      outputHSScore1.innerHTML = locStoreScore;
  };
};

function closeModal() {
  quizModal.classList.remove('show');
  let body = document.getElementsByTagName('body')[0];
  body.classList.remove('modal-open');
  let modalBackdrop = document.querySelector('.modal-backdrop');
  modalBackdrop.classList.remove('show');
};

// ---------------------------------------------------------------

function storeScore (event) {
  event.preventDefault()
}
submitButton.addEventListener('submit', storeScore);