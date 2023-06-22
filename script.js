let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll(".button");
const currentScore  = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");
const message = document.querySelector("h2");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();


      playRound(playerSelection, computerSelection);
  
      if (playerScore === 5 || computerScore === 5) {
        declareWinner();
      }
    });
  });

function getComputerChoice(computerChoice) {
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
        computerChoice = "ROCK"
    } else if (random == 1) {
        computerChoice = "PAPER"
    } else if (random == 2) {
        computerChoice = "SCISSORS"
    }

    return computerChoice;
}

  