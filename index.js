let playerSelection = ""
let computerSelection = ""

function getComputerChoice() {
    const symbols = ["Rock", "Paper", "Scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    return symbols[randomNumber]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection == computerSelection) {
        return 2
    } 
    else if (playerSelection == "Rock") {
        return (computerSelection == "Paper") ? 0 : 1;
    } 
    else if (playerSelection == "Paper") {
        return (computerSelection == "Scissors") ? 0 : 1;
    } 
    else if (playerSelection == "Scissors") {
        return (computerSelection == "Rock") ? 0 : 1;
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let tie = 0

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice()
        playerSelection = prompt("Select Rock, Paper or Scissors")

        if (playRound(playerSelection, computerSelection) === 0) {
            computerScore += 1;
        } else if (playRound(playerSelection, computerSelection) === 1) {
            playerScore += 1;
        } else if (playRound(playerSelection, computerSelection) === 2) {
            tie += 1;
        }
    }

    if (playerScore > computerScore) {
        alert(`You are a winner: ${playerScore}:${computerScore}`)
    } else if (playerScore < computerScore) {
        alert(`You lost: ${playerScore}:${computerScore}`)
    } else {
        alert(`Tie: ${playerScore}:${computerScore}`)
    }
}