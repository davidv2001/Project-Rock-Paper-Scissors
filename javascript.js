getComputerChoice = function () {
  let choice = Math.random();

  if (choice < 0.33) return "rock";
  else if (choice > 0.33 && choice < 0.66) return "paper";
  else if (choice > 0.66) return "scissors";
};

getHumanChoice = function () {
  let humanChoice = prompt("Rock, Paper or Scissors?");
  return humanChoice.toLowerCase();
};
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  playRound = function (humanChoice, computerChoice) {
    if (
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    } else if (
      (computerChoice === "scissors" && humanChoice === "rock") ||
      (computerChoice === "paper" && humanChoice === "scissors") ||
      (computerChoice === "rock" && humanChoice === "paper")
    ) {
      humanScore++;
      return `You lose! ${humanChoice} beats ${computerChoice}`;
    } else if (computerChoice === humanChoice) {
      return "Draw!";
    }
  };

  console.log(playRound(humanSelection, computerSelection));
}

playGame(humanSelection, computerSelection);
