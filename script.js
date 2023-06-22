let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", (event) => {
    let playerSelection = event.target.alt;
    let computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection)
}))

function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    return options[Math.floor(Math.random() * options.length)];
}