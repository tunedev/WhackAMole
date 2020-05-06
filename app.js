const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let hitPosition;

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  squares.forEach((element) => {
    element.classList.remove("mole");
  });
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;
}

squares.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition && currentTime > 0) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert(`GAME OVER!!!, Your final result is: ${result}`);
  }
}

let timerId = setInterval(countDown, 1000);
