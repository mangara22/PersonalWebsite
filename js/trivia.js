const questions = [
    {
      question: "Do I like Java?", // bonus
      answers: {
        a: "No",
        b: "Yes",
        c: "Maybe",
        d: "It depends"
      },
      correctAnswer: "c"
    },
    {
      question: "What is my favorite IDE?", // bonus
      answers: {
        a: "VSCode",
        b: "IntelliJ IDEA",
        c: "Vim",
        d: "None"
      },
      correctAnswer: "a"
    },
    {
      question: "Who is my favorite tennis player? (either active or retired)", // bonus
      answers: {
        a: "Roger Federer",
        b: "Rafael Nadal",
        c: "No one at the moment",
        d: "Carlos Alcaraz"
      },
      correctAnswer: "a"
    },
    {
      question: "What am I minoring in?",
      answers: {
        a: "IT Infrastructure",
        b: "IT",
        c: "Data Science",
        d: "AI"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of these programming languages do I NOT know?",
      answers: {
        a: "OCaml",
        b: "C",
        c: "Python",
        d: "Chair"
      },
      correctAnswer: "d"
    },
    {
      question: "Have I worked with Agile Scrum before?",
      answers: {
        a: "Yes, just once",
        b: "Yes, multiple times",
        c: "Nope",
        d: "Maybe"
      },
      correctAnswer: "b"
    }
];

let randomIndex = Math.random % questions.length;
const question = questions[randomIndex];