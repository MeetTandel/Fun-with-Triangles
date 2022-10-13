const sides = document.querySelectorAll("input");
const outputContainer = document.querySelector(".output");
const submitButton = document.querySelector(".btn-check");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const sideA = Number(sides[0].value);
  const sideB = Number(sides[1].value);
  const sideC = Number(sides[2].value);

  if (sideA < 0 || sideB < 0 || sideC < 0){
outputContainer.innerHTML = `Please enter positive values`;
  } else{
    if (
      sideA + sideB > sideC &&
      sideB + sideC > sideA &&
      sideC + sideA > sideB
      ) {
      const perimeter = (sideA + sideB + sideC) / 2;
      
      const areaOfTriangle = Math.sqrt(
        perimeter *
        (perimeter - sideA) *
        (perimeter - sideB) *
        (perimeter - sideC)
        ).toFixed(2);
        outputContainer.innerHTML = `<p>The area of triangle is <span>${areaOfTriangle}</span></p>`;
      } else {
        outputContainer.innerHTML = `Enter valid side lengths`;
      }
    }
});
