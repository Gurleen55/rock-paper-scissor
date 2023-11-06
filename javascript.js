// to get computer choice 

function getComputerChoice(){
    let result = Math.floor(Math.random() * 10);
    if(result >= 0 && result < 3) {
        return "rock";

    } else if(result >= 3 && result < 6){
        return "paper";

    } else {
        return "scissor";
    }
}

// function that will check who won the game
function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock"){
        switch (computerSelection){
            case "rock": {
                return "it's a draw";
            }
            case "paper": {
                computerCount++;
                return "you lost, paper beats rock";
                
            }
            case "scissor": {
                playerCount++;
                return "you won, rock beats scissor"
            }
        }
    } else if (playerSelection === "scissor"){
        switch (computerSelection){
            case "rock": {
                computerCount++;
                return "you lost, rock beats scissor";
            }
            case "paper": {
                playerCount++;
                return "you won, scissor beats paper";
            }
            case "scissor": {
                return "it's a draw"
            }
        }
    } else if (playerSelection === "paper"){
        switch (computerSelection){
            case "rock":{
                playerCount++;
                return "you won, paper beats rock";
            }
            case "paper":{
                return "it's a draw";
            }
            case "scissor":{
                computerCount++;
                return "you lost, scissor beats paper"
            }
        }
    }    
    }

let playerCount = 0;
let computerCount = 0;
let playerSelection;
let computerSelection; 
let gameInProgress = true;

 
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

rock.addEventListener('click', () => {
    if (gameInProgress){
    playerSelection = 'rock';
    game();
    rock.classList.add('highlight');  
    overlay();
    };
});

paper.addEventListener('click', () => {
    if (gameInProgress){
    playerSelection = 'paper';
    game();
    paper.classList.add('highlight');  
    overlay();
    };
});

scissor.addEventListener('click', () => {
    if (gameInProgress){
    playerSelection = 'scissor';
    game();
    // highlight the element clicked by user 
    scissor.classList.add('highlight');
    overlay();
    };
});

document.addEventListener('mouseup', (e) => {
    rock.classList.remove('highlight');
    paper.classList.remove('highlight');
    scissor.classList.remove('highlight');
 });
 
function game() {
    computerSelection = getComputerChoice();

    // got div that will display who won
    let result = document.getElementById('details')

    // button that will display computer's choice 
    let computerChoice = document.querySelector('.btn-computer');
    
    computerChoice.textContent = computerSelection.toUpperCase();
    result.textContent = playRound(playerSelection, computerSelection).toUpperCase();
    let humanScore = document.querySelector('.human');
    humanScore.textContent = playerCount; 
    let computerScore = document.querySelector('.computer');
    computerScore.textContent = computerCount;
    
}

function overlay() {
    if (playerCount === 5){
        let finalResult = document.getElementById('details');
        finalResult.textContent = 'You Won';
       
        playAgain();
        gameInProgress = false;
        
        

    }

    else if (computerCount === 5) {
        let finalResult = document.getElementById('details');
        finalResult.textContent = 'You Lost';
        
        playAgain();
        gameInProgress = false;

        
    }

} 

function playAgain() {
    let btnNew = document.createElement('button');
    btnNew.textContent = 'Play Again';
    let appendbtn = document.getElementById('details');
    btnNew.style.backgroundColor = 'silver';
    appendbtn.appendChild(btnNew);
    btnNew.addEventListener('click', () => {
        playerCount = 0;
        computerCount = 0;
        let humanScore = document.querySelector('.human');
        humanScore.textContent = playerCount; 
        let computerScore = document.querySelector('.computer');
        computerScore.textContent = computerCount;
         appendbtn.removeChild(btnNew);
    });

}






