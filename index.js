const buttons = document.querySelectorAll('.btn-symbol')
const showPlayerScore = document.querySelector('.playerResult')
const showComputerScore = document.querySelector('.computerResult')
const showPlayerSymbol = document.querySelector('.playerSymbol')
const showComputerSymbol = document.querySelector('.computerSymbol')
const playAgainButton = document.querySelector('.btnPlayAgain')
let playerScore = 0
let computerScore = 0

playAgainButton.style.display = "none";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (playerScore === 5 || computerScore === 5) {
            return
        }
        playGame(button.textContent)
    })
})

function getComputerChoice() {
    const symbols = ["Rock", "Paper", "Scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    return symbols[randomNumber]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 2;
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

function playGame(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = (playRound(playerSelection, computerSelection))

    if (result === 0) {
        computerScore +=1 ;
        showComputerScore.textContent = `${computerScore}`;
    } else if (result == 1) {
        playerScore += 1;
        showPlayerScore.textContent = `${playerScore}`;
    }

    if (computerScore === 5 || playerScore === 5) {
        playAgainButton.style.display = "block";
        playAgainButton.addEventListener("click", playAgain)
    }

    showPlayerSymbol.textContent = `${playerSelection}`
    showComputerSymbol.textContent = `${computerSelection}`
}

function playAgain() {
    playAgainButton.style.display = "none";
    playerScore = 0
    showPlayerScore.textContent = `${playerScore}`;
    computerScore = 0
    showComputerScore.textContent = `${computerScore}`;
    showPlayerSymbol.display = "none";
    showComputerSymbol.display = "none";
}