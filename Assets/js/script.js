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
  possibleAnswers: ["h1", "h2", "h3", "h4", "h5", "h6"],
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

// setting up variable for score, time, moving questions.

var score;

var highScore;

function setTime() {
  timer.textContent = "Time Remaining: " + secondsToMs(300);
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time Remaining: " + secondsToMs(secondsLeft);
    console.log(timer);
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //sends them to input initials
      initials();
      p;
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
  //Hide start button- need help

  if (mode === "start") {
    mode = "hiden";
    startId.setAttribute("class", "hidden");
  }
  console.log(startId);
  // Display question
  instructions.textContent = questionOne.question;

  //dispaly answers a-d
  questionOne.possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var testAnswers = [
    questionOne.correctAnswer,
    questionOne.possibleAnswers[0],
    questionOne.possibleAnswers[1],
    questionOne.possibleAnswers[2],
  ];

  testAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(testAnswers);

  aBtn.textContent = testAnswers[0];
  bBtn.textContent = testAnswers[1];
  cBtn.textContent = testAnswers[2];
  dBtn.textContent = testAnswers[3];

  function answerCheck(event) {
    var element = event.target;

    if (element.textContent == quesitonsOne.correctAnswer) {
      console.log(worked);
    }
  }

  //QUESTION TWO

  instructions.textContent = questionTwo.question;

  //dispaly answers a-d
  questionTwo.possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var testAnswers = [
    questionTwo.correctAnswer,
    questionTwo.possibleAnswers[0],
    questionTwo.possibleAnswers[1],
    questionTwo.possibleAnswers[2],
  ];

  testAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(testAnswers);

  aBtn.textContent = testAnswers[0];
  bBtn.textContent = testAnswers[1];
  cBtn.textContent = testAnswers[2];
  dBtn.textContent = testAnswers[3];

  // QUESTION THREE
  instructions.textContent = questionThree.question;

  //dispaly answers a-d
  questionThree.possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var testAnswers = [
    questionThree.correctAnswer,
    questionThree.possibleAnswers[0],
    questionThree.possibleAnswers[1],
    questionThree.possibleAnswers[2],
  ];

  testAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(testAnswers);

  aBtn.textContent = testAnswers[0];
  bBtn.textContent = testAnswers[1];
  cBtn.textContent = testAnswers[2];
  dBtn.textContent = testAnswers[3];

  //QUESTION FOUR

  instructions.textContent = questionFour.question;

  //dispaly answers a-d
  questionFour.possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var testAnswers = [
    questionFour.correctAnswer,
    questionFour.possibleAnswers[0],
    questionFour.possibleAnswers[1],
    questionFour.possibleAnswers[2],
  ];

  testAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(testAnswers);

  aBtn.textContent = testAnswers[0];
  bBtn.textContent = testAnswers[1];
  cBtn.textContent = testAnswers[2];
  dBtn.textContent = testAnswers[3];

  //QUESITON FIVE

  instructions.textContent = questionFive.question;

  //dispaly answers a-d
  questionTwo.possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var testAnswers = [
    questionFive.correctAnswer,
    questionFive.possibleAnswers[0],
    questionFive.possibleAnswers[1],
    questionFive.possibleAnswers[2],
  ];

  testAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(testAnswers);

  aBtn.textContent = testAnswers[0];
  bBtn.textContent = testAnswers[1];
  cBtn.textContent = testAnswers[2];
  dBtn.textContent = testAnswers[3];

  //QUESTION SIX

  instructions.textContent = questionSix.question;

  //dispaly answers a-d
  questionSix.possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var testAnswers = [
    questionSix.correctAnswer,
    questionSix.possibleAnswers[0],
    questionSix.possibleAnswers[1],
    questionSix.possibleAnswers[2],
  ];

  testAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(testAnswers);

  aBtn.textContent = testAnswers[0];
  bBtn.textContent = testAnswers[1];
  cBtn.textContent = testAnswers[2];
  dBtn.textContent = testAnswers[3];

  //QUESTION SEVEN

  instructions.textContent = questionSeven.question;

  //dispaly answers a-d
  questionTen.possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var testAnswers = [
    questionSeven.correctAnswer,
    questionSeven.possibleAnswers[0],
    questionSeven.possibleAnswers[1],
    questionSeven.possibleAnswers[2],
  ];

  testAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(testAnswers);

  aBtn.textContent = testAnswers[0];
  bBtn.textContent = testAnswers[1];
  cBtn.textContent = testAnswers[2];
  dBtn.textContent = testAnswers[3];

  // QUESTION EIGHT

  instructions.textContent = questionEight.question;

  //dispaly answers a-d
  questionEight.possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var testAnswers = [
    questionEight.correctAnswer,
    questionEight.possibleAnswers[0],
    questionEight.possibleAnswers[1],
    questionEight.possibleAnswers[2],
  ];

  testAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(testAnswers);

  aBtn.textContent = testAnswers[0];
  bBtn.textContent = testAnswers[1];
  cBtn.textContent = testAnswers[2];
  dBtn.textContent = testAnswers[3];

  // QUESTION NINE

  instructions.textContent = questionNine.question;

  //dispaly answers a-d
  questionNine.possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var testAnswers = [
    questionNine.correctAnswer,
    questionNine.possibleAnswers[0],
    questionNine.possibleAnswers[1],
    questionNine.possibleAnswers[2],
  ];

  testAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(testAnswers);

  aBtn.textContent = testAnswers[0];
  bBtn.textContent = testAnswers[1];
  cBtn.textContent = testAnswers[2];
  dBtn.textContent = testAnswers[3];

  // QUESTION TEN

  instructions.textContent = questionTen.question;

  //dispaly answers a-d
  questionTen.possibleAnswers.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var testAnswers = [
    questionTen.correctAnswer,
    questionTen.possibleAnswers[0],
    questionTen.possibleAnswers[1],
    questionTen.possibleAnswers[2],
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

// listen function for clicking to start time.

// need way to end game when time= 0

// setting up high score and remembering that.

// need function to reset the game.

// need a function for correct or incorrect answers.
