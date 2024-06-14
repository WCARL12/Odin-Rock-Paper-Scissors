let computerChoice = "";

function getComputerChoice() {
  randomNumber = Math.random();

  randomNumber < 1 / 3
    ? (computerChoice = "rock")
    : randomNumber >= 1 / 3 && randomNumber < 2 / 3
    ? (computerChoice = "paper")
    : (computerChoice = "scissors");

  return computerChoice;
}
computerChoice = getComputerChoice();
