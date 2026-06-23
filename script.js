const objQue = [
  {
    Question: "1. PM of India?",
    option: ["Trump", "Modi", "Putin", "Xee"],
    Answer: "Modi",
  },
  {
    Question: "2. Capital of MP?",
    option: ["Jabalpur", "Indore", "Bhopal", "Gwalior"],
    Answer: "Bhopal",
  },
  {
    Question: "3. National Sport of India?",
    option: ["Cricket", "Hockey", "Kabbadi", "Football"],
    Answer: "Hockey",
  },
  {
    Question: "4. Which sport has highest popularity?",
    option: ["Cricket", "Hockey", "Kabbadi", "Football"],
    Answer: "Football",
  },
  {
    Question: "5. Which sport has highest popularity in India?",
    option: ["Cricket", "Hockey", "Kabbadi", "Football"],
    Answer: "Cricket",
  },
];

const container = document.querySelector(".container");
const startQuiz = document.querySelector(".start-quiz");

let count = 0;
let userAnswer = {};

startQuiz.addEventListener("click", () => {
  startQuiz.innerHTML = "";
  renderQuestion();
});

function renderQuestion() {
  localStorage.setItem("count", count);
  localStorage.setItem("userAnswer", JSON.stringify(userAnswer));

  container.innerHTML = "";
  const questionElement = document.createElement("div");

  const question = document.createElement("p");
  question.classList.toggle("question");
  question.textContent = `${objQue[count].Question}`;

  const option1 = document.createElement("p");
  option1.textContent = `${objQue[count].option[0]}`;

  const option2 = document.createElement("p");
  option2.textContent = `${objQue[count].option[1]}`;

  const option3 = document.createElement("p");
  option3.textContent = `${objQue[count].option[2]}`;

  const option4 = document.createElement("p");
  option4.textContent = `${objQue[count].option[3]}`;

  questionElement.appendChild(question);
  
  container.appendChild(questionElement);
}