// questions
var questionOne = {
  question: "Which is not a data type supported by JavaScript?",
  possibleAnswers: [
    "Undefined",
    "Null",
    "Boolean",
    "String",
    "Symbol",
    "Number",
    "Object",
  ],
  correctAnswer: "Ratio",
  //   minusTime: userAnswer === questionOne.correctAnswer,
};

var questionTwo = {
  question: "What specail character is used to identify an array?",
  possibleAnswers: ["Parens", "Colon", "Semi-Colon", "Curlies", "Quotations"],
  correctAnswer: "Brackets",
  //   minusTime: userAnswer === questionTwo.correctAnswer,
};

var questionThree = {
  question:
    "In the array 'var question = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', what number is in the index 5 position? ",
  possibleAnswers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  correctAnswer: 6,
  //   minusTime: userAnswer === questionThree.correctAnswer,
};

var questionFour = {
  question:
    "Which head has the highest level of importance when read by search engines?",
  possibleAnswers: ["h2", "h3", "h4", "h5", "h6"],
  correctAnswer: "h1",
  //   minusTime: userAnswer === questionFour.correctAnswer,
};
var questionFive = {
  question: "What do the x and y represent in function(x,y)?",
  possibleAnswers: [
    "Arguments",
    "Varaibles",
    "Names",
    "Passers",
    "Strict Equal",
    "And/Or",
    "if/else",
  ],
  correctAnswer: "Parameters",
  //   minusTime: userAnswer === questionFive.correctAnswer,
};
var questionSix = {
  question: "What are the real values passed into a function called?",
  possibleAnswers: [
    "Parameters",
    "Varaibles",
    "Names",
    "Passers",
    "Strict Equal",
    "And/Or",
    "if/else",
  ],
  correctAnswer: "Arguments",
  //   minusTime: userAnswer === questionSix.correctAnswer,
};
var questionSeven = {
  question:
    "What is the device tool bar that will allow you to resize your pages width and height?",
  possibleAnswers: [
    "Inspect",
    "Welcome",
    "Elements",
    "Sources",
    "Resize",
    "Network",
    "No Throttling",
  ],
  correctAnswer: "Responsive",
  //   minusTime: userAnswer === questionSeven.correctAnswer,
};
var questionEight = {
  question: "What does the new value: ('50' + '1')",
  possibleAnswers: [
    "Undefined",
    "51",
    "'51'",
    "JavaScript cant do math",
    "Im a coder, not a mathmatician",
  ],
  correctAnswer: "'501'",
  //   minusTime: userAnswer === questionEight.correctAnswer,
};
var questionNine = {
  question: "What statement do you use to jump out of a loop?",
  possibleAnswers: [
    "Continue",
    "End",
    "Do",
    "While",
    "Function",
    "i++",
    "Label",
  ],
  correctAnswer: ["Break"],
  //   minusTime: userAnswer === questionNine.correctAnswer,
};
var questionTen = {
  question: "How do you add 1 to a the first statement in a 'For Loop'?",
  possibleAnswers: ["==", "===", "<==", "!==", "&&", "||", "+1"],
  correctAnswer: "i++",
  //   minusTime: userAnswer === questionTen.correctAnswer,
};
console.log(questionTen.correctAnswer);

var questions = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
  questionNine,
  questionTen,
];

var timer = document.querySelector(".timer");
var start = document.querySelector(".start");

var instructions = document.querySelector(".instructions");

var userAnswer = true;
var secondsLeft = 300;
var aBtn = document.querySelector("#aBtn");
var bBtn = document.querySelector("#bBtn");
var cBtn = document.querySelector("#cBtn");
var dBtn = document.querySelector("#dBtn");
var displayAnswers;
var startId = document.querySelector(".startId");
var mode = "startId";
var i = 0;
var answerButton = document.querySelector(".answerButton");
var finalTime;
var initials = document.querySelector("#initials");
var initialsInput;

// setting up variable for score, time, moving questions.

var score = 0;
var highScore;

var highscoreDisplay = document;
function highscoreDisplay() {}

function setTime() {
  timer.textContent = "Time Remaining: " + secondsToMs(300);
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time Remaining: " + secondsToMs(secondsLeft);
    console.log(timer);
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      //sends them to input initials

      timer.textContent = "Time Remaining: 0:00";
      return;
    }
  }, 1000);
}

start.addEventListener("click", setTime);

function secondsToMs(d) {
  var m = Math.floor(d / 60);
  var s = Math.floor(d % 60).toFixed(0);

  if (s < 10) {
    s = "0" + s;
  }
  return m + ":" + s;
}

start.addEventListener("click", startGame);

function randomize() {}

function startGame() {
  start.style.display = "none";

  console.log(startId);
  console.clear();
  // Display question
  questionGenerator();
}

//for question function
function questionGenerator() {
  instructions.textContent = questions[i].question;

  questions[i].possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(questionOne.possibleAnswers);

  var testAnswers = [
    questions[i].correctAnswer,
    questions[i].possibleAnswers[0],
    questions[i].possibleAnswers[1],
    questions[i].possibleAnswers[2],
  ];

  testAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(testAnswers);

  aBtn.textContent = testAnswers[0];
  bBtn.textContent = testAnswers[1];
  cBtn.textContent = testAnswers[2];
  dBtn.textContent = testAnswers[3];
}

//event handler for class="answerButton"

answerButton.addEventListener("click", answerCheck);

function answerCheck(event) {
  console.log(event);
  if (event.target.innerText === questions[i].correctAnswer) {
    score++;
    console.log(score);
  } else {
    secondsLeft = secondsLeft - 15;
  }

  if (i === 9) {
    finalTime = secondsLeft;
    console.log(finalTime);
    secondsLeft = 0;
    displayIni();
  } else {
    i++;
    questionGenerator();
  }
  console.log(i);
}

function displayIni() {
  instructions.textContent = "Please inpute your initials.";
  initials.style.display = "inline";
}

var input = document.querySelector("#input");
var highscoresARR = [];
highscoresARR = JSON.parse(localStorage.getItem("highscores")) || [];
var initialSubmit = document.querySelector("#initialSubmit");
initialSubmit.addEventListener("click", grabInitial);

function grabInitial() {
  console.log(highscoresARR);
  highscoresARR.push({
    initials: input.value,
    score: score,
    finalTime: finalTime,
  });
  localStorage.setItem("highscores", JSON.stringify(highscoresARR));
  highscoresARR.push({
    initials: input.value,
    score: score,
    finalTime: finalTime,
  });

  document.location.reload();

  displayHighscores();
}

function displayHighscores() {}
