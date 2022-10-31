function getPlayerChoice() {
    let playerChoice = prompt("Please choose rock, paper, or scissors: ")
    playerChoice.toString
    return (playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase())
}

function getComputerChoice() {
    let computerChoice
    switch ((Math.floor(Math.random() * 3))) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissor";
            break;
    }
    return computerChoice
}