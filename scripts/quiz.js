const quizform = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answers-btn");
const outputContainer = document.querySelector(".output");
const questionItems = document.querySelectorAll(".question-container");
const resetButton = document.querySelector("#reset-btn");
const answers = document.querySelectorAll("input");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle"
];
let score = 0;

resetButton.addEventListener("click", () => {
  score = 0;
  answers.forEach((answer) => {
    answer.checked = false;
  });
  questionItems.forEach((question) => {
    question.classList.remove("incorrect");
    question.classList.remove("correct");
  });

  outputContainer.innerHTML = "";
});

submitButton.addEventListener("click", () => {
  const formResults = new FormData(quizform);
  score = 0;
  let index = 0;

  questionItems.forEach((question) => {
    question.classList.add("incorrect");
    question.classList.remove("correct");
  });

  formResults.forEach((value) => {
    const questionItem = questionItems[index];
    const isCorrect = value === correctAnswers[index];
    if (isCorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
      score++;
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }
    index++;
  });
  outputContainer.innerHTML = `<p>The score is <span>${score}</span></p>`;
});
