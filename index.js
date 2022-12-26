function getComputerChoice() {
    const symbols = ["Rock", "Paper", "Scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    return symbols[randomNumber]
}