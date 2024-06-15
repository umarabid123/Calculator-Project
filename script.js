

let leftBracket = document.getElementById('bracket').innerHTML ='('
let rightBracket =document.getElementById("bracket-R").innerHTML = ")";
let display = document.getElementById("display");
let res = document.getElementById("result");
let currentInput = "0";
let operator = null;
let previousInput = null;
let dotExist = false;

function updateDisplay() {
  display.value = currentInput;
}
function updateResult() {
  res.innerHTML = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  updateDisplay();
}

// function DelNumber() {
//   display.value = display.value.slice(0, -1);
// }

function DelNumber(){
  let a =document.cacl.text.value;
  document.cacl.text.value = a.substr(0, a.length-1);
}
function bracket(){
  display.value +='('
}
function bracketRight(){
  display.value +=')'
}
function appendNumber(num) {
  if (currentInput === "0") {
    console.log("dotExist -> ", dotExist);
    currentInput = num;
  } else {
    if (dotExist == false || num != ".") {
      console.log("dotExist -> ", dotExist);
      currentInput = currentInput + num;
      if (num == ".") {
        dotExist = true;
      }
    }
  }
  updateDisplay();
}
function appendOperator(op) {
  if (operator !== null) {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "0";
}
 function sin(){
  document.cacl.text.value = Math.sin(document.cacl.text.value);
  res.innerHTML =document.cacl.text.value
 }
 function cos(){
  document.cacl.text.value = Math.cos(document.cacl.text.value);
  res.innerHTML =document.cacl.text.value
 }
 function tan(){
  document.cacl.text.value = Math.tan(document.cacl.text.value);
  res.innerHTML =document.cacl.text.value
 }
 function log(){
  document.cacl.text.value = Math.log(document.cacl.text.value);
  res.innerHTML =document.cacl.text.value
 }
 function powerTwo(){
  document.cacl.text.value = Math.pow(document.cacl.text.value,2)
  res.innerHTML =  document.cacl.text.value
 }
 function powerThree(){
  document.cacl.text.value = Math.pow(document.cacl.text.value,3)
  res.innerHTML =  document.cacl.text.value
 }

 function sqrt(){
  document.cacl.text.value = Math.pow(document.cacl.text.value,1/2)
  res.innerHTML =  document.cacl.text.value
 }
 function sqrtThree(){
  document.cacl.text.value = Math.pow(document.cacl.text.value,1/3)
  res.innerHTML =  document.cacl.text.value
 }

function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  dotExist = false;
  updateDisplay();
  updateResult();
}

function calculateResult() {
  if (operator === null || previousInput === null) {
    return;
  }
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    case "%":
      result = prev % curr;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operator = null;
  previousInput = null;
  updateResult();
}

function toggleDivs() {
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");

  if (btn1.classList.contains("hidden")) {
      btn1.classList.remove("hidden");
      btn2.classList.add("hidden");
  } else {
      btn1.classList.add("hidden");
      btn2.classList.remove("hidden");
  }
}
function calculateTrig(func) {
  const result = document.getElementById('display');
  result.value += ` ${func} `;
}
