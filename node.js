let computerScore = 0;
let playerScore = 0;

// Function to get the computer choice
function getComputerChoice() {
  randomNumber = Math.random();

  randomNumber < 1 / 3
    ? (computerChoice = "rock")
    : randomNumber >= 1 / 3 && randomNumber < 2 / 3
    ? (computerChoice = "paper")
    : (computerChoice = "scissors");

  return computerChoice;
}

// Function to display the score for player and computer
function displayScore() {
  console.log(`Player Score: ${playerScore} : Computer Score ${computerScore}`);
}

// Function to display the choices for player and computer
function displayChoices() {
  console.log(
    `Player picked ${playerChoice} : Computer picked ${computerChoice}`
  );
}

// Function to get that calculates the outcome who won
function getOutcome(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    displayChoices();
    console.log("It's a tie!");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    displayChoices();
    playerScore += 1;
    console.log("Player Wins!");
    displayScore();
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    displayChoices();
    playerScore += 1;
    console.log("Player Wins!");
    displayScore();
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    displayChoices();
    playerScore += 1;
    console.log("Player Wins!");
    displayScore();
  }
}
// Function to play the round
function playRound() {
  let playerChoice = prompt("Rock, Paper, or Scissors: ");
  let computerChoice = getComputerChoice();

  getOutcome(playerChoice, computerChoice);
}
