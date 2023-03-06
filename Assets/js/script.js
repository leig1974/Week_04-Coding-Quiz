//creste a quiz
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

//display question
function displayQuestion() {
  console.log(quiz);
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
`;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
}

//create quiz questions
var questions = [
  new Question(
    "A very useful tool used during development and debugging for printing content to the debugger is?", ["javaScript", "terminal/bash", "for loops", "console log"], "console log"
  ),

  new Question(
    "String values must be enclosed within ________ when being assigned to variables?",
    ["commas", "curly brackets", "quotes", "parentheses"],
    "parentheses"
  ),

  new Question(
    "Arrays in JavaScript can be used to store?",
    ["numbers and strings", "other errays", "qboolean", "all the the above"],
    "numbers and strings"
  ),

  new Question(
    "The condition in an if/else statement is enclosed within ____?",
    ["quotes", "curly bracket", "parentheses", "all the the above"],
    "numbers and strings"
  ),

  new Question(
    "Commonly used data types DO NOT include?",
    ["strings", "booleans", "palerts", "numbers"],
    "strings"
  ),
];


let quiz = new Quiz(questions);

//display question
displayQuestion();


//add a countdown
let quizTime = 5000;
// let quizTimeInMinutes = time * 60 * 60;
// quizTime = quizTimeInMinutes;

let counting = document.getElementById("count-down");

function startCountdown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      // let sec = Math.floor(quizTime % 60);
      // let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIME: ${quizTime}`
    }
  }, 1000)
}

startCountdown();
