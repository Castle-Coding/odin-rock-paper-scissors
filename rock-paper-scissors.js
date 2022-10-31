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

function evaluateChoices(playerSelection, computerSelection) {
    let result

    if (playerSelection == "Rock" && computerSelection == "Rock") {
        result = "Tie"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        result = "Lose"
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissor") {
        result = "Win"
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        result = "Win"
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        result = "Tie"
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissor") {
        result = "Lose"
    }
    else if (playerSelection == "Scissor" && computerSelection == "Rock") {
        result = "Lose"
    }
    else if (playerSelection == "Scissor" && computerSelection == "Paper") {
        result = "Win"
    }
    else if (playerSelection == "Scissor" && computerSelection == "Scissor") {
        result = "Tie"
    }
    else {
        result = "Invalid"
    }

    return result
}