function getPlayerChoice() {
    let playerChoice = prompt("Please choose Rock, Paper, or Scissors: ")
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
            computerChoice = "Scissors";
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
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        result = "Win"
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        result = "Win"
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        result = "Tie"
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        result = "Lose"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        result = "Lose"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        result = "Win"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        result = "Tie"
    }
    else {
        result = "Invalid"
    }
    return result
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = getPlayerChoice()
    let result = evaluateChoices(playerSelection, computerSelection)
    let output

    if (result == "Win") {
        output = "You " + result + "! " + playerSelection + " beats " + computerSelection + "."
    }
    else if (result == "Lose") {
        output = "You " + result + "! " + computerSelection + " beats " + playerSelection + "."
    }
    else if (result == "Tie") {
        output = "Tie! " + playerSelection + " and " + computerSelection + " are equal."
    }
    else if (result == "Invalid") {
        output = "Invalid selection; please input Rock, Paper or Scissors!"
    }

    return output
}