const $order = document.getElementById("order");
const $word = document.getElementById("word");
const $input = document.querySelector("input");
const $btn = document.querySelector("button");

const number = parseInt(prompt("참가자는 몇 명입니까?"), 10);
let word;
let newWord;

const handleInput = (e) => {
  newWord = e.target.value;
};

const handleClick = (e) => {
  if (!word || word[word.length - 1] === newWord[0]) {
    const order = parseInt($order.textContent);
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }

    word = newWord;
    $word.textContent = word;
  } else {
    alert("올바르지 않은 단어입니다!");
  }
  $input.value = "";
  $input.focus();
};

const init = () => {
  $input.addEventListener("input", handleInput);
  $btn.addEventListener("click", handleClick);
};

init();
