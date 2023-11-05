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



// function game(){
   
//         let playerSelection1 = prompt("choose rock, paper or scissor");
//         playerSelection = playerSelection1.toLowerCase();
//         console.log(`player chose ${playerSelection}`)
//         let computerSelection = getComputerChoice();
//         console.log("computerSelection is", computerSelection);
//         console.log(playRound(playerSelection, computerSelection));


    
    
// }

//game();
// console.log("playerCount is", playerCount);
// console.log(`computerCount is ${computerCount}`);

function winner(){

    if (playerCount > computerCount){
        console.log("You won");
    }
    else if(computerCount > playerCount){
        console.log("You lost");
    }
    else{
        console.log("it's a draw");
    }
}

// winner();

// FOR THE UI 

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    let result = document.createElement('div');
   // result.textContent = `computer Selection is ${computerSelection}, player selection is ${playerSelection}`;
   let textNode = document.createTextNode(`computer selected ${computerSelection}, player selected ${playerSelection} and ${playRound(playerSelection, computerSelection)}, player score is ${playerCount}, computer score is ${computerCount}`);
    document.body.appendChild(result);
    result.appendChild(textNode);
    if (playerCount === 5){
        let newTextNode = document.createTextNode('you won');
        document.body.appendChild(newTextNode);
    }
    else if (computerCount === 5){
        let newTextNode = document.createTextNode('you lost');
        document.body.appendChild(newTextNode);  
    }
    
   
})
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    console.log(`computerSelection is ${computerSelection}`);
    let result = document.createElement('div');
    let textNode = document.createTextNode(`computer selected ${computerSelection}, player selected ${playerSelection} and ${playRound(playerSelection, computerSelection)}, player score is ${playerCount}, computer score is ${computerCount}`);
    document.body.appendChild(result);
    result.appendChild(textNode);
    if (playerCount === 5){
        let newTextNode = document.createTextNode('you won');
        document.body.appendChild(newTextNode);
    }
    else if (computerCount === 5){
        let newTextNode = document.createTextNode('you lost');
        document.body.appendChild(newTextNode);  
    }
    
    
    
   
})
scissor.addEventListener('click', () => {
    playerSelection = 'scissor';
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    let result = document.createElement('div');
    let textNode = document.createTextNode(`computer selected ${computerSelection}, player selected ${playerSelection} and ${playRound(playerSelection, computerSelection)}, player score is ${playerCount}, computer score is ${computerCount}`);
    document.body.appendChild(result);
    result.appendChild(textNode);
    if (playerCount === 5){
        let newTextNode = document.createTextNode('you won');
        document.body.appendChild(newTextNode);
    }
    else if (computerCount === 5){
        let newTextNode = document.createTextNode('you lost');
        document.body.appendChild(newTextNode);  
    }
    
    
    

});





