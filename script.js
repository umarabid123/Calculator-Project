let display = document.getElementById("display");
let currentInput = "0";
let operator = null;
let previousInput = null;
let dotExist = false;

function updateDisplay() {
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  updateDisplay();
}

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}
function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  dotExist = false;
  updateDisplay();
}

function appendOperator(op) {
    if (operator !== null) {
        calculateResult();
    }
    operator = op
    previousInput = currentInput
    currentInput = "0"
}
function calculateResult() {
}
