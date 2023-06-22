let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll("button");
let playerScoreBox = document.querySelector("#player-score");
let cpuScoreBox = document.querySelector("#cpu-score");
let message = document.querySelector(".message");

buttons.forEach(button => button.addEventListener("click", (event) => {
    let playerSelection = event.target.alt;
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    updateScores();

    if (playerScore === 5 || computerScore === 5) {
        endGame()
    }
}))

function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(player, cpu) {
    if (player === cpu) {
        displayResult("It's a DRAW!");
    } else if ((player === "ROCK" && cpu === "SCISSORS") || (player === "PAPER" && cpu === "ROCK") || (player === "SCISSORS" && cpu === "PAPER")) {
        playerScore++;
        displayResult("You WIN! Keep it up");
    } else if ((player === "PAPER" && cpu === "SCISSORS") || (player === "SCISSORS" && cpu === "ROCK") || (player === "ROCK" && cpu === "PAPER")) {
        computerScore++;
        displayResult("You Lose! Try Again");
    }
}

function updateScores() {
    playerScoreBox.innerHTML = playerScore;
    cpuScoreBox.innerHTML = computerScore;
}

function displayResult(str) {
    message.innerHTML = str;
}

function endGame() {
    if (playerScore > computerScore) {
        window.alert(`You won the game! CONGRATULATION! \nPlayer: ${playerScore} \nComputer: ${computerScore}`);
    } else {
       window.alert(`You lost the game. Better luck next time. \nPlayer: ${playerScore} \nComputer: ${computerScore}`); 
    }
    playerScore = 0;
    computerScore = 0;
    updateScores();
}