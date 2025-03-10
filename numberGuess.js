// numberGuess.js

const correctNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let guess;

while (true) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"), 10); // Prompt user input

    if (isNaN(guess) || guess < 1 || guess > 10) {
        console.log("Invalid input. Please enter a number between 1 and 10.");
        continue; // Skip to next iteration if input is invalid
    }

    if (guess > correctNumber) {
        console.log("Too high!");
    } else if (guess < correctNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct!");
        break; // Exit loop when correct guess is made
    }
}