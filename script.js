let display = document.getElementById("display");
let res = document.getElementById("result");
let currentInput = "0";
let operator = null;
let previousInput = null;
let dotExist = false;

function updateDisplay() {
  display.innerText = currentInput;
}
function updateResult(){
  res.innerHTML =  currentInput
}

function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  updateDisplay();
}

function DelNumber(){
  display.value= display.value.slice(0, -1);
}

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
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

function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  dotExist = false;
  updateDisplay();
}

function calculateResult() {
  if (operator === null || previousInput === null) {
      return;
  }
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  switch (operator) {
      case '+':
          result = prev + curr;
          break;
      case '-':
          result = prev - curr;
          break;
      case '*':
          result = prev * curr;
          break;
      case '/':
          result = prev / curr;
          break;
          case '%':
          result = prev % curr;
          break;
      default:
          return;
  }
  currentInput = result.toString();
  operator = null;
  previousInput = null;
  updateResult()
}


