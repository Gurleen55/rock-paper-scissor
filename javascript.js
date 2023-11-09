const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const options = [ROCK, PAPER, SCISSOR];

let playerCount = 0;
let computerCount = 0;
let gameInProgress = true;

function getComputerChoice(options) {
    const randomInt = Math.floor(Math.random() * 3);
    console.log(randomInt);

    return options[randomInt];
}





function getRoundResult(playerSelection, computerSelection) {
	
	switch (true) {
		case computerSelection === playerSelection:
			return "it's a draw";
		case (playerSelection === ROCK && computerSelection === PAPER) ||
			(playerSelection === SCISSOR && computerSelection === ROCK) ||
			(playerSelection === PAPER && computerSelection === SCISSOR):
			computerCount++;
			return `you lost, ${computerSelection} beats ${playerSelection}`;
		default:
			playerCount++;
			return `you won, ${playerSelection} beats ${computerSelection}`;
	}
}

options.forEach(option => {
    document.getElementById(option).addEventListener("click", event => {
        if (!gameInProgress){
            return;
        }
        playerSelection = option;
        startGame(option, options);
        event.target.classList.add("highlight");
        checkForWinner();

    });
});

document.addEventListener("mouseup", e => {
    options.forEach(option => {
        document.getElementById(option).classList.remove("highlight");
    });
});

function startGame(playerSelection, options) {
    const computerSelection = getComputerChoice(options);

    const resultdisplay = document.getElementById("details");
    resultdisplay.textContent = getRoundResult(playerSelection, computerSelection).toUpperCase();

    const computerChoiceDisplay = document.querySelector(".btn-computer");
    computerChoiceDisplay.textContent = computerSelection.toUpperCase();

    const playerScoreDisplay = document.querySelector(".human");
    playerScoreDisplay.textContent = playerCount;
    const computerScoreDisplay = document.querySelector(".computer");
	computerScoreDisplay.textContent = computerCount;
};

function checkForWinner() {
    const playerWon = playerCount === 5;
    const computerWon = computerCount === 6;


    if (!playerWon && !computerWon) {
    return;
    }

    const finalResult = document.getElementById("details");
    finalResult.textContent = playerWon ? "You Won" : "You Lost";
    addPlayAgainButton();
    gameInProgress = false;
}

function addPlayAgainButton() {
    const newGameButton = document.createElement("button");
    newGameButton.textContent = "Play Again";
    const detailsDisplay = document.getElementById("details");
    newGameButton.style.backgroundColor = "silver";
    detailsDisplay.appendChild(newGameButton);

    newGameButton.addEventListener("click", () => {
        resetGame();
        detailsDisplay.textContent = "";
        detailsDisplay.removeChild(newGameButton);
    });

}

function resetGame() {
    playerCount = 0;
    computerCount = 0;
    const playerScoreDisplay = document.querySelector(".human");
	playerScoreDisplay.textContent = playerCount;
	const computerScoreDisplay = document.querySelector(".computer");
	computerScoreDisplay.textContent = computerCount;

    gameInProgress = true;
}
