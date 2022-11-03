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
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    computerSelection = getComputerChoice()
    playerSelection = this.id;
    const outputDisplay = document.querySelector('#results-window')
    changeRoundSelectionImage(playerSelection, computerSelection);
    let result = evaluateChoices(playerSelection, computerSelection);
    let output;
    let gameResult;

    if (winCount == 5 || loseCount == 5) {
        let playerRoundSelectionImage = document.getElementById('player-round-selection')
        let computerRoundSelectionImage = document.getElementById('computer-round-selection')
        playerRoundSelectionImage.innerHTML = `<img src="./images/question-mark.png">`
        computerRoundSelectionImage.innerHTML = `<img src="./images/question-mark.png">`
        winCount = 0
        loseCount = 0
        tieCount = 0
        playerScoreDisplay.textContent = `Player: ${winCount}`;
        computerScoreDisplay.textContent = `Computer: ${loseCount}`;
    } else if (result == "Win") {
        winCount++
        playerScoreDisplay.textContent = `Player: ${winCount}`;
        output = "You " + result + "! " + playerSelection + " beats " + computerSelection + "."
    }
    else if (result == "Lose") {
        loseCount++
        computerScoreDisplay.textContent = `Computer: ${loseCount}`;
        output = "You " + result + "! " + computerSelection + " beats " + playerSelection + "."
    }
    else if (result == "Tie") {
        tieCount++
        output = "Tie! " + playerSelection + " and " + computerSelection + " are equal."
    }
    else if (result == "Invalid") {
        output = "Invalid selection; please input Rock, Paper or Scissors!"
    }

    if (checkIfGameOver()) {
        if (winCount > loseCount) {
            gameResult = "Win"
            output = `Game Over! You ${gameResult}!`;
            outputDisplay.textContent = output
        } else if (loseCount > winCount) {
            gameResult = "Lose"
            output = `Game Over! You ${gameResult}!`;
            outputDisplay.textContent = output
        }
    }
        outputDisplay.textContent = output
        return output
};

function changeRoundSelectionImage(playerSelection, computerSelection) {
    let playerRoundSelectionImage = document.getElementById('player-round-selection')
    let computerRoundSelectionImage = document.getElementById('computer-round-selection')

    switch (playerSelection) {
        case "Rock":
            playerSelection = "Rock";
            playerRoundSelectionImage.innerHTML = `<img src="./images/rock.png">`
            console.log(`Player: ${playerRoundSelectionImage.innerHTML}`)
            break;

        case "Paper":
            playerSelection = "Paper";
            playerRoundSelectionImage.innerHTML = `<img src="./images/paper.png">`
            console.log(`Player: ${playerRoundSelectionImage.innerHTML}`)
            break;
        case "Scissors":
            playerSelection = "Scissors";
            playerRoundSelectionImage.innerHTML = `<img src="./images/scissors.png">`
            console.log(`Player: ${playerRoundSelectionImage.innerHTML}`)
            break;
    }

    switch (computerSelection) {
        case "Rock":
            computerSelection = "Rock";
            computerRoundSelectionImage.innerHTML = `<img src="./images/rock.png">`
            console.log(`Player: ${computerRoundSelectionImage.innerHTML}`)
            break;
        case "Paper":
            computerSelection = "Paper";
            computerRoundSelectionImage.innerHTML = `<img src="./images/paper.png">`
            console.log(`Player: ${computerRoundSelectionImage.innerHTML}`)
            break;
        case "Scissors":
            computerSelection = "Scissors";
            computerRoundSelectionImage.innerHTML = `<img src="./images/scissors.png">`
            console.log(`Player: ${computerRoundSelectionImage.innerHTML}`)
            break;
    }
}

function checkIfGameOver() {
    if (winCount == 5 || loseCount == 5) {
        return true;
    } else {
        return false;
    }
}

let winCount = 0
let loseCount = 0
let tieCount = 0

const selections = Array.from(document.querySelectorAll('.selection-image'));
selections.forEach(selection => selection.addEventListener('click', playRound));
