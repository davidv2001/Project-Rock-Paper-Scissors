getComputerChoice = function () {
  let choice = Math.random();

  if (choice < 0.33) return "rock";
  else if (choice > 0.33 && choice < 0.66) return "paper";
  else if (choice > 0.66) return "scissors";
};

getHumanChoice = function () {
  let humanChoice = prompt("Rock, Paper or Scissors?");
  return humanChoice;
};


function playGame() {
  // let humanSelection = getHumanChoice();
  // let computerSelection = getComputerChoice();
  let humanScore = 0;
  let computerScore = 0;

  function playRound (humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    if (
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (
      (computerChoice === "scissors" && humanChoice === "rock") ||
      (computerChoice === "paper" && humanChoice === "scissors") ||
      (computerChoice === "rock" && humanChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (computerChoice === humanChoice) {
      return "Draw!";
    }
  };


  for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if(humanScore > computerScore) console.log(`You win with a score of ${humanScore}`);
  else console.log(`You lose, computer wins with a score of ${computerScore}`);
}


playGame();