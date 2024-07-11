const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const number = document.querySelectorAll(".number");
const operand = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
let operation;

function appendNumber(number) {
  if (number === "." && currDisplay.innerText.includes(".")) return;
  currDisplay.innerText += number;
}

function chooseOperation(operand) {
  if (currDisplay.innerText === "") return;
  compute(operand);
  operation = operand;
  currDisplay.innerText += operand;
  prevDisplay.innerText = currDisplay.innerText;
  currDisplay.innerText = "";
}

function clearDisplay() {
  currDisplay.innerText = "";
  prevDisplay.innerText = "";
}

function compute(operand) {
  let result;
  const previousValue = parseFloat(prevDisplay.innerText);
  const currentValue = parseFloat(currDisplay.innerText);

  if (isNaN(previousValue) || isNaN(currentValue)) return;

  switch (operation) {
    case "+":
      result = previousValue + currentValue;
      break;

    case "-":
      result = previousValue - currentValue;
      break;

    case "*":
      result = previousValue * currentValue;
      break;

    case "/":
      result = previousValue / currentValue;
      break;
    default:
      return;
  }
  currDisplay.innerText = result;
}

number.forEach((number) => {
  number.addEventListener("click", () => {
    chooseOperation(operand.innerText);
  });
});

operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    chooseOperation(operand.innerText);
  });
});

clearBtn.addEventListener("click", () => {
  clearDisplay();
});

equalBtn.addEventListener("click", () => {
  compute();
  prevDisplay.innerText = "";
});

delBtn.addEventListener("click", () => {
  currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});
