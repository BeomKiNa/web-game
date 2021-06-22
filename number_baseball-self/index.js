const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const answer = [];
const tries = [];
let outCount = 0;

function getAnswer() {
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
  }
  console.log(answer);
}

function endGame() {
  $form.removeEventListener("submit", handleSubmit);
  $form.addEventListener("submit", (e) => e.preventDefault());
  $input.readOnly = true;
  addMessage("게임이 종료되었습니다! 다시 시작하려면 새로고침 해주세요.");
}

function isVaild(text) {
  if (text.length !== 4) {
    return alert("4자리 숫자를 입력해야합니다.");
  }
  if (new Set(text).size !== 4) {
    return alert("중복되지 않게 입력해주세요.");
  }
  if (tries.includes(text)) {
    return alert("이미 시도한 값입니다.");
  }
  return true;
}

function addMessage(text) {
  const p = document.createElement("p");
  p.innerText = text;
  $logs.append(p);
}

function checkAnswer(value) {
  let strike = 0;
  let ball = 0;
  let out = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index === -1) {
      out += 1;
      continue;
    }

    if (index === i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }
  if (out === 4) {
    outCount += 1;
  }
  addMessage(
    `${
      tries.length + 1
    }회차: ${strike} 스트라이크 ${ball} 볼 ${out} 아웃 입니다. 4아웃은 ${outCount}번 입니다.`
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const value = $input.value;
  $input.value = "";
  if (!isVaild(value)) {
    return;
  }
  if (value === answer.join("")) {
    addMessage("홈런입니다!");
    return;
  }
  if (tries.length >= 9) {
    addMessage(`패배하셨습니다! 정답은 ${answer.join("")} 입니다.`);
    endGame();
    return;
  }
  if (outCount >= 2) {
    addMessage(
      `3연속 4 out으로 패배하셨습니다! 정답은 ${answer.join("")} 입니다.`
    );
    endGame();
    return;
  }
  checkAnswer(value);
  tries.push(value);
}

function init() {
  getAnswer();
  $form.addEventListener("submit", handleSubmit);
}

init();
