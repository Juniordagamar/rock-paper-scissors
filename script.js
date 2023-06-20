let playerScore = 0
let computerScore = 0


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
        return alert("It's a tie!")
    } else if ((playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "ROCK" && computerSelection === "SCISSORS")) {
        playerScore++ ;
        return alert("You win! Player score: " + playerScore + " and Computer Score: " + computerScore)
    } else if ((playerSelection === "SCISSORS" && computerSelection === "ROCK") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "ROCK" && computerSelection === "PAPER")) {
        computerScore++;
        return alert("You lose! Player score: " + playerScore + " and Computer Score: " + computerScore)
    }
}

function game() {
    while (playerScore < 5 && computerScore < 5){
        let playerSelection = prompt("Rock, paper, scissors!");
        playerSelection = playerSelection.toUpperCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    playerScore < computerScore ? alert("Game OVER! Better luck next time") : alert("Congratulations! You win this game!");
}