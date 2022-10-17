alert(`Welcome to Rock, Paper, Scissors Game by Dara`);
console.log(`Welcome to Rock, Paper, Scissors Game by Dara`);

function computerPlay() {
  const computer_options = ["rock", "paper", "scissors"];
  const computer_input =
    computer_options[Math.floor(Math.random() * computer_options.length)];
  return computer_input;
}

function userPlay() {
  let user_input = "";
  while (true) {
    user_input = prompt(
      `Choose between Rock, Paper or Scissors.`
    ).toLowerCase();
    if (
      user_input == "rock" ||
      user_input == "paper" ||
      user_input == "scissors"
    ) {
      return user_input;
    } else {
      alert("Error!, Please choose between rock, paper or scissors.");
    }
  }
}

function playRound(playerSelection, computerSelection, score) {
  let round_result = "";
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          round_result = `It's is a tie.`;
          break;
        case "paper":
          round_result = `You Lose! Paper beats Rock!`;
          score[1]++;
          break;
        case "scissors":
          round_result = `You Win! Rock beats Scissors.`;
          score[0]++;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          round_result = `You Win! Paper Beats Rock`;
          score[0]++;
          break;
        case "paper":
          round_result = `It's a tie.`;
          break;
        case "scissors":
          round_result = "You Lose! Scissors beats Paper";
          score[1]++;
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          round_result = `You Lose! Rock beats Scissors`;
          score[1]++;
          break;
        case "paper":
          round_result = `You Win! Scissors Beats Paper`;
          score[0]++;
          break;
        case "scissors":
          round_result = `It's a tie`;
      }
  }
  return round_result;
}

function game() {
  let computerSelection = "";
  let playerSelection = "";
  let round_result = "";
  let player_score = 0;
  let computer_score = 0;
  let score = [player_score, computer_score];

  for (let i = 0; i < 5; i++) {
    playerSelection = userPlay();
    computerSelection = computerPlay();
    round_result = playRound(playerSelection, computerSelection, score);

    console.log(`Round ${i + 1}`);
    console.log(`You picked ${playerSelection}`);
    console.log(`Computer picked ${computerSelection}`);
    alert(`Computer picked ${computerSelection}`);
    console.log(round_result);
    alert(round_result);
    console.log(`Score: Player ${score[0]} - Computer ${score[1]}`);
    alert(`In Round ${i + 1}, You have ${score[0]} & Computer has ${score[1]}`);
    // The first to win 3 rounds Wins.
    if (i >= 2) {
      if (score[0] == 3) {
        alert("Congratulations! You Won The Game!!!");
        break;
      } else if (score[1] == 3) {
        alert("Computer Wins! Game Over...");
        break;
      }
    }
    //  or
    // whoever has the highest score at the end of the game wins
    if (i == 4) {
      if (score[0] > score[1]) {
        alert("Congratulations! You Won The Game!!!");
      } else if (score[0] < score[1]) {
        alert("Computer Wins! Game Over...");
      } else {
        alert("The Game is a tie");
      }
    }
  }
}

game();
