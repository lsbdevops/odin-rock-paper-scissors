
// Function that randomly picks 'rock', 'paper' or 'scissors' and returns the selection.
function getComputerChoice() {
    // Store a random number in a variable (integer between 0 - 2).
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Initiate an array which contains strings 'rock', 'paper' and scissors'.
    const choicesArray = ["rock", "paper", "scissors"];

    // Using the random number as an index for the choices array, return one of the possibilities.
    return choicesArray[randomNumber];
}