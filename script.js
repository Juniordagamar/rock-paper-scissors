let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", (event) => {
    let playerSelection = event.target.alt;
    console.log(playerSelection);
}))