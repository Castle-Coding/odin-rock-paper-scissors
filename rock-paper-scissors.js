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

function game() {
    let winCount = 0
    let loseCount = 0
    let tieCount = 0
    let score
    let gameResult

    for (let i = 0; i < 5; i++) {
        let roundResult = playRound()
        if (roundResult.includes("Win")) {
            console.log("Win")
            winCount++
            score = "Wins: " + winCount + ", Loses: " + loseCount + ", Ties: " + tieCount + "."
            //    console.log(score)

        } else if (roundResult.includes("Lose")) {
            console.log("Lose")
            loseCount++
            score = "Wins: " + winCount + ", Loses: " + loseCount + ", Ties: " + tieCount + "."
            //    console.log(score)

        } else if (roundResult.includes("Tie")) {
            console.log("Tie")
            tieCount++
            score = "Wins: " + winCount + ", Loses: " + loseCount + ", Ties: " + tieCount + "."
            //    console.log(score)
        }
        console.log("Round: " + (i + 1))
    }

    if (winCount + loseCount + tieCount == 5 && winCount > loseCount) {
        gameResult = "Win"
    } else if (winCount + loseCount + tieCount == 5 && winCount < loseCount) {
        gameResult = "Lose"
    } else if (winCount + loseCount + tieCount == 5 && winCount == loseCount) {
        gameResult = "Tie"
    } else {
        gameResult = "Invalid game, please try again"
    }

    return (gameResult + "! Score (" + score + ")")
}


function testFunction(e) {
    console.log((this.id))
};

function playUiRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = this.id;
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

    console.log(output)
    return output
}

const selections = Array.from(document.querySelectorAll('.selection-image'));
selections.forEach(selection => selection.addEventListener('click', playUiRound));



