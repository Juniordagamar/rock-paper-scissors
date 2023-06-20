
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

    console.log(computerChoice)

    return computerChoice
}
