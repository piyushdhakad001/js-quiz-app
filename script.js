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

const savedCount = localStorage.getItem("count");
const savedAnswers = localStorage.getItem("userAnswer");

if (savedCount !== null) {
  count = parseInt(savedCount);
  userAnswer = savedAnswers ? JSON.parse(savedAnswers) : {};
  startQuiz.innerHTML = "";
  renderQuestion();
}

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


  const previousButton = document.createElement("button");
  previousButton.classList.add("button","previousButton");
  
  previousButton.textContent = "Previous";

  const nextButton = document.createElement("button");
  nextButton.classList.add("button","nextButton");
  nextButton.textContent = "next";

  // --------Next Button-------------


  nextButton.addEventListener("click", () => {
    if (count < objQue.length - 1) {
      count++;
      renderQuestion();
    } else {
      showResult();
    }
  });

  previousButton.addEventListener("click", () => {
    if (count > 0) {
      count--;
    }
    renderQuestion();
  });


  questionElement.appendChild(question);
  container.appendChild(questionElement);

objQue[count].option.forEach((opt) => {
    const option = document.createElement("p");
    option.textContent = opt;
    option.classList.add("option");

    if (userAnswer[count] === opt) {
      option.style.backgroundColor = "lightblue";
    }

    option.addEventListener("click", () => {
      userAnswer[count] = opt;
      localStorage.setItem("userAnswer", JSON.stringify(userAnswer));

      document.querySelectorAll(".option").forEach((el) => {
        el.style.pointerEvents = "none";
        el.style.opacity = "0.6";
        el.style.backgroundColor = "";
      });

      option.style.backgroundColor = "lightblue";
    });
    questionElement.appendChild(option);
  });


  questionElement.appendChild(previousButton);
  questionElement.appendChild(nextButton);
}