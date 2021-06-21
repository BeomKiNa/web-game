let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const onClickNumber = (event) => {
  if (!operator) {
    // 비어있다
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  // 비어있지 않다
  if (!numTwo) {
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

const onClickOperator = (op) => () => {
  if (op === "-" && !numOne) {
    numOne += op;
    $result.value = op;
    return;
  } else if (op === "-" && operator && !numTwo) {
    numTwo += op;
    $result.value = op;
    return;
  }

  if (numOne) {
    calculate();
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자를 먼저 입력하세요.");
  }
};

const calculate = () => {
  switch (operator) {
    case "+":
      numOne = parseInt(numOne) + parseInt(numTwo);
      break;
    case "-":
      numOne = parseInt(numOne) - parseInt(numTwo);
      break;
    case "*":
      numOne = parseInt(numOne) * parseInt(numTwo);
      break;
    case "/":
      numOne = parseInt(numOne) / parseInt(numTwo);
      break;
    default:
      break;
  }
  numTwo = "";
  $result.value = numOne;
};

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document
  .querySelector("#minus")
  .addEventListener("click", onClickOperator("-"));
document
  .querySelector("#divide")
  .addEventListener("click", onClickOperator("/"));
document
  .querySelector("#multiply")
  .addEventListener("click", onClickOperator("*"));
document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    calculate();
  } else {
    alert("숫자를 먼저 입력하세요.");
  }
  operator = "";
  $operator.value = "";
});
document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});
