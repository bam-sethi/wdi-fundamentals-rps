


////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  
    return move || getInput();

}

function getComputerMove(move) {
    
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
   
    if (computerMove === playerMove ) {
        winner = "tie";
    } else if ( computerMove === "rock" && playerMove === "scissors") {
        winner = "computer";
    } else if ( computerMove === "rock" && playerMove === "paper") {
        winner = "player";  
    } else if ( computerMove === "paper" && playerMove === "rock") {
        winner = "computer";
    } else if ( computerMove === "paper" && playerMove === "scissors") {
        winner = "player";
    } else if ( computerMove === "scissors" && playerMove === "paper") {
        winner = "computer";
    } else if ( computerMove === "scissors" && playerMove === "rock") {
        winner = "player";
    }
    

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
  
    while (computerWins !== 5 && playerWins < 5 || playerWins !== 5 && computerWins < 5) {
        
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        
        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        }
        
        
        
        console.log("Player chose: " + playerMove + " and Computer chose: "   + computerMove);
        
        console.log("The current score is: " + playerWins + 
        " to " + computerWins);
        
        
    
    }
    
    if (computerWins > playerWins){
            console.log("computer wins!");
        } else if (playerWins > computerWins){
            console.log("player wins!");
        } 
    
    return [playerWins, computerWins];
    
}


playToFive();

