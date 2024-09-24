const questions = [
    {
      question: "Do I like Java?", // bonus
      answers: {
        a: "No",
        b: "Yes",
        c: "Maybe",
        d: "It depends"
      },
      correctAnswer: "Maybe (it depends on the day)"
    },
    {
      question: "What is my favorite IDE?", // bonus
      answers: {
        a: "VSCode",
        b: "IntelliJ IDEA",
        c: "Vim",
        d: "None"
      },
      correctAnswer: "VSCode, but if it's Java, IntelliJ"
    },
    {
      question: "Who is my favorite tennis player? (either active or retired)", // bonus
      answers: {
        a: "Roger Federer",
        b: "Rafael Nadal",
        c: "No one at the moment",
        d: "Carlos Alcaraz"
      },
      correctAnswer: "Roger Federer, sadly retired :("
    },
    {
      question: "What am I minoring in?",
      answers: {
        a: "IT Infrastructure",
        b: "IT",
        c: "Data Science",
        d: "AI"
      },
      correctAnswer: "IT Infrastructure"
    },
    {
      question: "Which of these programming languages do I NOT know?",
      answers: {
        a: "OCaml",
        b: "C",
        c: "Python",
        d: "Chair"
      },
      correctAnswer: "Chair (this is made up)"
    },
    {
      question: "Have I worked with Agile Scrum before?",
      answers: {
        a: "Yes, just once",
        b: "Yes, multiple times",
        c: "Nope",
        d: "Maybe"
      },
      correctAnswer: "Yes, multiple times"
    }
];

var correct = "";

function getPersonalTrivia() {
  let randomIndex = Math.floor(Math.random() * 6);
  const current_question = questions[randomIndex];

  document.getElementById("personal-trivia").innerHTML = current_question.question;
  document.getElementById("option1-personal").innerHTML = current_question.answers.a;
  document.getElementById("option2-personal").innerHTML = current_question.answers.b;
  document.getElementById("option3-personal").innerHTML = current_question.answers.c;
  document.getElementById("option4-personal").innerHTML = current_question.answers.d;

  correct = current_question.correctAnswer;
}

function correctTriviaAnswer() {
  if (correct === "") {
    alert("No question has been loaded in yet!");
  }
  else {
      alert(correct);
  }
  getPersonalTrivia();
}