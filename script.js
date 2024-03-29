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
    
    const result = {"result": "",
                    "winner": ""};

    // Check each win and lose condition for "rock, paper, scissors" and return the winner in a string.
    if (((playerSelection === "rock") && (computerSelection === "scissors")) || 
        ((playerSelection === "scissors") && (computerSelection === "paper")) ||
        ((playerSelection === "paper") && (computerSelection === "rock")))
    {
    result.result = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    result.winner = "player";
    }
    else if (((playerSelection === "rock") && (computerSelection === "paper")) ||
        ((playerSelection === "scissors") && (computerSelection === "rock")) ||
        ((playerSelection === "paper") && (computerSelection === "scissors")))
    {
    result.result = `You Lose! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    result.winner = "computer";
    }
    // If no win conditions are met, then the results is a draw.
    else{
    result.result = "Draw!";
    result.winner = "draw";  
    };

    return result;
}

function scoreUpdate(roundWinner) {
    // Check the winner and get the appropriate score element.
    const scoreElement = (roundWinner === "player") ?  document.querySelector("#players-score")
    : (roundWinner === "computer") ? document.querySelector("#computers-score")
    : null;

    // If a draw, do not update the score.
    if (!scoreElement) return;

    // Increment the current score by 1.
    let score = +(scoreElement.textContent) + 1;
    scoreElement.textContent = score;

    // Return the round winner's total score.
    return score;
}

// Checks if there is an overall winner, and if so declares the winner on the webpage.
function isWinner(currentRoundWinner, roundWinnersScore) {
    if (roundWinnersScore === WINNING_SCORE) {
        const winnerElement = document.querySelector("#winner")
        winnerElement.textContent = `${capitalize(currentRoundWinner)} wins!`

        if (currentRoundWinner === "player") winnerElement.style.color = "green";
        else winnerElement.style.color = "red";

        return true;
    }
    
    return false;
}

// Capital first character in a string for display/aesthetic purposes.
function capitalize(string) {
    const stringArray = string.split("");
    stringArray[0] = stringArray[0].toUpperCase()
    return stringArray.join("")
}

// Function that plays a game of rock, paper, scissors by getting the user input and playing a round.
function game(event) {
    // Get the user's selection from the button clicked (the button's id).
    const playerChoice = this.id;

    // Call the playRound function with inputs of the user's choice variable and output of the getComputerChoice function.
    // Print result on the webpage.
    const resultElement = document.querySelector("#result")
    const result = playRound(playerChoice, getComputerChoice())
    resultElement.textContent = "Round result: " + result.result;
    if (result.winner === "player") resultElement.style.color = "green";
    else if (result.winner === "computer") resultElement.style.color = "red";
    else resultElement.style.color = "black";

    // Update the score and check if there's an overall winner. If so, end the game by disabling event listeners.
    if (isWinner(result.winner, scoreUpdate(result.winner))) {
        buttons.forEach((button) => {
            button.removeEventListener("click", game);
         })
    }
}

// Declare a constant variable for the score which results in an overall winner (i.e., first to *number score*).
const WINNING_SCORE = 5;

// Add an event listener to all buttons, and run game function when clicked.
const buttons = document.querySelectorAll("button");

 buttons.forEach((button) => {
    button.addEventListener("click", game);
 })