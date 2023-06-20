let playerScore = 0
let computerScore = 0
function getComputerChoice() {
    let computerChoice
    let random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0 :
            computerChoice = "ROCK";
        case 1 :
            computerChoice = "PAPER";
        case 2 : 
            computerChoice = "SCISSORS";  
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if ((playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "ROCK" && computerSelection === "SCISSORS")) {
        playerScore++ ;
        return "You win! Player score: " + playerScore + " and Computer Score: " + computerScore
    } else if ((playerSelection === "SCISSORS" && computerSelection === "ROCK") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "ROCK" && computerSelection === "PAPER")) {
        computerScore++;
        return "You lose! Player score: " + playerScore + " and Computer Score: " + computerScore
    }
}

function game() {
    


}