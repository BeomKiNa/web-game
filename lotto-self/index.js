const result = document.getElementById("result");
const bonus = document.getElementById("bonus");

const candidate = Array(45)
  .fill()
  .map((e, i) => i + 1);

let list = [];
let winBalls;
let bonusBall;

const shuffle = () => {
  while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    list.push(value);
  }
};

const getNums = () => {
  winBalls = list.slice(0, 6).sort((a, b) => a - b);
  bonusBall = list[6];
};

const colorize = (target, num) => {
  if (num < 10) {
    target.style.backgroundColor = "red";
    target.style.color = "#fff";
  } else if (num < 20) {
    target.style.backgroundColor = "orange";
  } else if (num < 30) {
    target.style.backgroundColor = "yellow";
  } else if (num < 40) {
    target.style.backgroundColor = "blue";
    target.style.color = "#fff";
  } else {
    target.style.backgroundColor = "green";
    target.style.color = "#fff";
  }
};

const paintBall = (target, num) => {
  const div = document.createElement("div");
  div.className = "ball";
  div.innerText = num;
  colorize(div, num);
  target.appendChild(div);
};

const init = () => {
  shuffle();
  getNums();
  winBalls.map((num, i) =>
    setTimeout(() => paintBall(result, num), (i + 1) * 1000)
  );
  setTimeout(() => paintBall(bonus, bonusBall), 7000);
};

init();
