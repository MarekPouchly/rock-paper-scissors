function getComputerChoice() {
    const symbols = ["Rock", "Paper", "Scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    return symbols[randomNumber]
}

const playerSelection = "RocK"
const computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection == computerSelection) {
        return "Tie"
    } 
    else if (playerSelection == "Rock") {
        return (computerSelection == "Paper") ? "You lose" : "You won";
    } 
    else if (playerSelection == "Paper") {
        return (computerSelection == "Scissors") ? "You lose" : "You won";
    } 
    else if (playerSelection == "Scissors") {
        return (computerSelection == "Rock") ? "You lose" : "You won";
    }
}