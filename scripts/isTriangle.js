const input = document.querySelectorAll(".input-text");
const submitButton = document.querySelector(".btn-check");
const outputContainer = document.querySelector(".output");

input.forEach((element) => {
  element.addEventListener("input", () => {
    outputContainer.innerText = "";
  });
});

submitButton.addEventListener("click", () => {
  const angle1 = Number(input[0].value);
  const angle2 = Number(input[1].value);
  const angle3 = Number(input[2].value);

  const sum = angle1 + angle2 + angle3;

  if (sum === 180) {
    outputContainer.innerText = `Yay! The angles form a triangle.`;
  } else {
    outputContainer.innerText = `Oops! The angles don't form a triangle.`;
  }
});
