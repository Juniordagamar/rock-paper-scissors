
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
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose your weapon").toUpperCase();

    if (playerSelection === computerSelection) {
        return alert("It's a tie!")
    } else if ((playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "ROCK" && computerSelection === "SCISSORS")) {
        return alert("You win!")
    } else if ((playerSelection === "SCISSORS" && computerSelection === "ROCK") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "ROCK" && computerSelection === "PAPER")) {
        return alert("You lose")
    }
}

