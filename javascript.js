// const ROCK = "rock";
// const PAPER = "paper";
// const SCISSOR = "scissor";
// const options = [ROCK, PAPER, SCISSOR];

// let playerCount = 0;
// let computerCount = 0;
// let gameInProgress = true;

// function getComputerChoice(options) {
//     const randomInt = Math.floor(Math.random() * 3);
//     console.log(randomInt);

//     return options[randomInt];
// }

// function getRoundResult(playerSelection, computerSelection) {

// }



function getRoundResult(playerSelection, computerSelection) {
	/*
      - I think in general switch statements are gross and ugly, but they have their time and place.
      - Using switch(true) is a neat alternative to if/else:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#an_alternative_to_if...else_chains
    */
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

console.log(getRoundResult("ROCK", "ROCK") );
