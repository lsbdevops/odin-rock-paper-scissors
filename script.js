
// Function that randomly picks 'rock', 'paper' or 'scissors' and returns the selection.
function getComputerChoice() {
    // Store a random number in a variable (integer between 0 - 2).
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Initiate an array which contains strings 'rock', 'paper' and scissors'.
    const choicesArray = ["rock", "paper", "scissors"];

    // Using the random number as an index for the choices array, return one of the possibilities.
    return choicesArray[randomNumber];
}

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

