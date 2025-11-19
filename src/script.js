let score = 0;
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("section");
const intialSection = document.getElementById("intial-section");
const gameSection = document.getElementById("game-section");
const playerChoice = document.getElementById("player-choice");
const houseChoice = document.getElementById("house-choice");
const choices = ["rock", "paper", "scissors"];
const messageEl = document.getElementById("result-message");

rulesBtn.addEventListener("click", () => {
  rules.classList.toggle("hidden");
});
closeBtn.addEventListener("click", () => {
  rules.classList.toggle("hidden");
});


let icons = { 
  rock: '<img src="./images/icon-rock.svg" alt="rock" class="w-12 h-12">', 
  paper: '<img src="./images/icon-paper.svg" alt="paper" class="w-12 h-12">', 
  scissor: '<img src="./images/icon-scissors.svg" alt="scissors" class="w-12 h-12">' 
};
let borders = {
  rock: "border-red-800",
  paper: "border-blue-900",
  scissor: "border-amber-400",
};

document.getElementById("paper").addEventListener("click", function () {
  playGame("paper");
});

document.getElementById("rock").addEventListener("click", function () {
  playGame("rock");
});

document.getElementById("scissor").addEventListener("click", function () {
  playGame("scissor");
});

document.getElementById("rules-btn").addEventListener("click", function () {
  document.getElementById("rules-overlay").classList.remove("hidden");
  document.getElementById("rules-overlay").classList.add("flex");
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("rules-overlay").classList.add("hidden");
  document.getElementById("rules-overlay").classList.remove("flex");
});

document.getElementById("play-again").addEventListener("click", function () {
  resetGame();
});

function playGame(playerChoice) {
  let houseChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("initial-section").classList.add("hidden");
  document.getElementById("results-area").classList.remove("hidden");
  document.getElementById("results-area").classList.add("flex");

  let playerDiv = document.getElementById("player-choice");
  playerDiv.innerHTML = icons[playerChoice];
  playerDiv.className =
    "rounded-full w-24 h-24 text-4xl flex items-center justify-center bg-white border-8 " +
    borders[playerChoice];

  let houseDiv = document.getElementById("house-choice");
  houseDiv.innerHTML = icons[houseChoice];
  houseDiv.className =
    "rounded-full w-24 h-24 text-4xl flex items-center justify-center bg-white border-8 " +
    borders[houseChoice];

  var result = getResult(playerChoice, houseChoice);
  document.getElementById("result-message").textContent = result;
  document.getElementById("play-again").classList.remove("hidden");

  if (result === "YOU WIN") {
    score++;
    document.getElementById("game-score").textContent = score;
  } else if (result === "YOU LOSE") {
    score = Math.max(0, score - 1);
    document.getElementById("game-score").textContent = score;
  }
}

function getResult(player, house) {
  if (player === house) {
    return "DRAW";
  }
  if (
    (player === "rock" && house === "scissor") ||
    (player === "paper" && house === "rock") ||
    (player === "scissor" && house === "paper")
  ) {
    return "YOU WIN";
  }
  return "YOU LOSE";
}

function resetGame() {
  document.getElementById("initial-section").classList.remove("hidden");
  document.getElementById("results-area").classList.add("hidden");
  document.getElementById("results-area").classList.remove("flex");
  document.getElementById("result-message").textContent = "";
  document.getElementById("play-again").classList.add("hidden");
}
