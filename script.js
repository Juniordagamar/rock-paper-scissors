let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll(".button");
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

function playRound(playerSelection, computerSelection) {
     
    if (playerSelection === computerSelection) {
        displayResult("It's a tie!")
    } else if ((playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "ROCK" && computerSelection === "SCISSORS")) {
        playerScore++ ;
        displayResult("You win! Keep it up")
    } else if ((playerSelection === "SCISSORS" && computerSelection === "ROCK") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "ROCK" && computerSelection === "PAPER")) {
        computerScore++;
        displayResult("You lose! Try Again")
    }
}

function displayResults(str) {
    message.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
    message.textContent = str;
}

function keepPlayerScore() {
    let currentScore = document.querySelector("#player-score");
  
    currentScore.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
  
    currentScore.textContent = playerScore;
  };

  function keepCpuScore() {
    let cpuScore = document.querySelector("#computer-score");
  
    cpuScore.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
  
    cpuScore.textContent = computerScore;
  }
  