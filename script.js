
// Function that randomly picks 'rock', 'paper' or 'scissors' and returns the selection.
function getComputerChoice() {
    // Store a random number in a variable (integer between 0 - 2).
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Initiate an array which contains strings 'rock', 'paper' and scissors'.
    const choicesArray = ["rock", "paper", "scissors"];

    // Using the random number as an index for the choices array, return one of the possibilities.
    return choicesArray[randomNumber];
}

// Function that takes the player's and the computer's selection as inputs and outputs the winner of the round.
function playRound(playerSelection, computerSelection) {
    // To ensure case-insensitivity, convert the string stored in the playerSelection variable to lower case.
    playerSelection = playerSelection.toLowerCase();

    // Check each win and lose condition for "rock, paper, scissors" and return the winner in a string.
    if ((playerSelection === "rock") && (computerSelection === "scissors")) return "You win! Rock beats Scissors.";
    else if ((playerSelection === "rock") && (computerSelection === "paper")) return "You lose! Paper beats Rock.";
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) return "You lose! Rock beats Scissors.";
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) return "You win! Scissors beats Paper.";
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) return "You lose! Scissors beats Paper.";
    else if ((playerSelection === "paper") && (computerSelection === "rock")) return "You win! Paper beats Rock.";

    // If no win conditions are met, then the results is a draw.
    else return "Draw!";
}

// Function that plays a game of rock, paper, scissors by getting the user input and playing a round.
function game() {
    // Prompt the user for their choice of rock, paper or scissors and store in a variable.
    const playerChoice = prompt("Rock, paper or scissors?");

    // Call the playRound function with inputs of the user's choice variable and output of the getComputerChoice function.
    console.log(playRound(playerChoice, getComputerChoice()));
}

// Play 5 games by using a for loop.
for (let i = 0; i < 5; i++) {
    game();
}