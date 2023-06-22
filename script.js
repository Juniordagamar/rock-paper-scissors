let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", event => {
    let playerSelection = button.innerText;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}))

const div = document.querySelector("div")


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
        displayResult("You win! Player score: " + playerScore + " and Computer Score: " + computerScore)
    } else if ((playerSelection === "SCISSORS" && computerSelection === "ROCK") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "ROCK" && computerSelection === "PAPER")) {
        computerScore++;
        displayResult("You lose!")
    }
}

function displayResult(str) {
    div.innerText = str;
}

function game() {
    while (playerScore < 5 && computerScore < 5){
        let playerSelection = prompt("Rock, paper, scissors!");
        playerSelection = playerSelection.toUpperCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    playerScore < computerScore ? "Game OVER! Better luck next time" : "Congratulations! You win this game!";
};



