const quizform = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answers-btn");
const outputContainer = document.querySelector(".output");
const questionItems = document.querySelectorAll(".question-container");
const resetButton = document.querySelector("#reset-btn");
const answers = document.querySelectorAll("input");

const correctAnswers = {
  question1: "90°",
  question2: "right angled",
  question3: "one right angle",
  question4: "12, 16, 20",
  question5: "Equilateral triangle"
};
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

  for (let keys of formResults.keys()) {
    var questionDOM = document.querySelector(`#${keys}`);
    let questionItem = questionDOM.closest(".question-container");

    if (formResults.get(keys) === correctAnswers[keys]) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
      score = score + 1;
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }
    index = index + 1;
  }

  outputContainer.innerHTML = `<p>The score is <span>${score}</span></p>`;
});

