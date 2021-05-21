const quizData = [
  {
    question: "Which is not a programming language?",
    a: "Java",
    b: "C",
    c: "Flutter",
    d: "JavaScript",
    correct: "c",
  },
  {
    question: "What is the best programming language?",
    a: "Java",
    b: "Fortran",
    c: "The one you know",
    d: "Depends?",
    correct: "d",
  },
  {
    question: "What is the most used programming language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "Cascading Style Sheet",
    b: "Hypertext Markup Language",
    c: "Jason Object Notation",
    d: "How To Markup Languages",
    correct: "b",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1997",
    b: "1996",
    c: "1995",
    d: "1994",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submit.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h1>You answered ${score} out of ${quizData.length} questions correctly!</h1>
                <button onclick="location.reload()">Reload</button>`;
    }
  }
});
