let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll("button");
let playerScoreBox = document.querySelector("#player-score");
let cpuScoreBox = document.querySelector("#cpu-score"); 

buttons.forEach(button => button.addEventListener("click", (event) => {
    let playerSelection = event.target.alt;
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    updateScores();
}))

function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(player, cpu) {
    if (player === cpu) {
        return "It's a DRAW!";
    } else if ((player === "ROCK" && cpu === "SCISSORS") || (player === "PAPER" && cpu === "ROCK") || (player === "SCISSORS" && cpu === "PAPER")) {
        playerScore++;
        return "You WIN! Keep it up";
    } else if ((player === "PAPER" && cpu === "SCISSORS") || (player === "SCISSORS" && cpu === "ROCK") || (player === "ROCK" && cpu === "PAPER")) {
        computerScore++;
        return "You Lose! Try Again";
    }
}

function updateScores() {
    playerScoreBox.innerHTML = playerScore;
    cpuScoreBox.innerHTML = computerScore;
}