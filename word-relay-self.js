const $order = document.getElementById("order");
const $word = document.getElementById("word");
const $input = document.querySelector("input");
const $button = document.querySelector("button");

const MAX_NUM = parseInt(prompt("참가자는 몇 명입니까?"), 10);
let player = parseInt($order.innerText);
let word;
let newWord;

const validCheck = () => {
  if (
    newWord.length === 3 &&
    (!word || (word && word[word.length - 1] === newWord[0]))
  ) {
    return true;
  }
  return false;
};

const handleInput = (event) => {
  newWord = event.target.value;
};

const handleClick = () => {
  const isValid = validCheck();
  if (!isValid) {
    alert("올바르지 않은 단어 입니다.");
  } else {
    word = newWord;
    $word.innerText = word;
    if (player < MAX_NUM) {
      player++;
    } else {
      player = 1;
    }
    $order.innerText = player;
  }
  $input.focus();
  $input.value = "";
};

if (MAX_NUM) {
  $input.addEventListener("input", handleInput);
  $button.addEventListener("click", handleClick);
} else {
  alert("참가자가 없어 게임이 종료됩니다. 다시 시도하시려면 새로고침 해주세요");
}
