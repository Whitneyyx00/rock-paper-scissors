// Step 1
console.log("Hello World");


// Step 2: Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


// Step 3: Get human choice
function getHumanChoice() {
    const userInput = prompt('Choose rock, paper, or scissors:').toLowerCase();
    // Validate user input
    if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
        alert('Invalid choice. Please choose rock, paper, or scissors.');
    
    return getHumanChoice();
}
    return userInput;
}


// Step 4: Initialize scores
let playerScore = 0;
let computerScore = 0;


// Step 5: Play single round
function playRound(humanChoice, computerChoice) {

    // Make human choice case insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        playerScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

// Step 6: Play game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }


    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie! No clear winner.");
    }
}


// Call the playGame function to start the game
playGame();