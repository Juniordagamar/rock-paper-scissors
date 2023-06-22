let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".button");
const currentScore  = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");
const message = document.querySelector("h2");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toUpperCase();
  
      playRound(playerSelection, computerSelection);
  
      if (playerScore === 5 || computerScore === 5) {
        declareWinner();
      }
    });
  });
  