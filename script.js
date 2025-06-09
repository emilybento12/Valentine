const questions = [
  {
    question: "Qual a data do nosso primeiro beijo?",
    options: ["04 de novembro", "10 de março", "18 de maio", "01 de janeiro"],
    answer: "04 de novembro"
  },
  {
    question: "Qual a data do pedido de namoro?",
    options: ["04 de novembro", "10 de março", "14 de fevereiro", "05 de julho"],
    answer: "10 de março"
  },
  {
    question: "Quando foi o pedido de casamento?",
    options: ["18 de maio", "18 de março", "04 de novembro", "25 de dezembro"],
    answer: "18 de maio"
  },
  {
    question: "Qual é nosso tipo de date favorito?",
    options: ["Date com comidinhas", "Cinema", "Viagem", "Parque de diversões"],
    answer: "Date com comidinhas"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const quizEl = document.getElementById("quiz");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(btn, correctAnswer) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");

  if (btn.textContent === correctAnswer) {
    score++;
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    quizEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
  }
});

window.onload = () => {
  loadQuestion();
  nextBtn.disabled = true;
};
