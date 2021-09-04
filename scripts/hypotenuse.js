const input = document.querySelectorAll("input");
const submitButton = document.querySelector(".btn-check");
const outputContainer = document.querySelector(".output");

submitButton.addEventListener("click", () => {
  const base = Number(input[0].value);
  const height = Number(input[1].value);

  const sumOfSquares = calcuateSquares(base, height);

  const hypotenuse = Math.sqrt(sumOfSquares);

  outputContainer.innerHTML = `The hypotenuse of base <span>${base}</span> and height <span>${height}</span> is <span>${hypotenuse}</span>`;
});

function calcuateSquares(base, height) {
  return base * base + height * height;
}
