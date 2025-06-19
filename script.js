const questions = [
  {
    question: " Q.1 What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: " Q.2 Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: " Q.3 What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hot Mail",
      "How to Make Landingpage",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question:" Q.4 Are yor human?",
    options:[
        "yes","option no.1","both option 1 and 2","all of these"],
    answer: "all of these"    
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const timeEl = document.getElementById("time");

function startQuiz() {
  showQuestion();
  startTimer();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectAnswer(option));
    optionsEl.appendChild(li);
  });
}

function selectAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
    score++;
  }
  nextBtn.disabled = false;
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextBtn.disabled = true;
  } else {
    clearInterval(timer);
    endQuiz();
  }
});

function endQuiz() {
  document.getElementById("question-container").classList.add("hidden");
  nextBtn.classList.add("hidden");
  resultEl.classList.remove("hidden");
  resultEl.textContent = `Quiz over! Your score: ${score} out of ${questions.length}`;
}

startQuiz();

