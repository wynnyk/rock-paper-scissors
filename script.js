function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function getUserChoice() {
    let choice;
    while (choice !== "Rock" && choice !== "Scissors" && choice !== "Paper") {
    choice = prompt("Rock, Paper or Scissors?");
    choice = choice.charAt(0).toUpperCase() + choice.substring(1).toLowerCase();
    } return choice;
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock";
      } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
      } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
      } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
      } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
      } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
      } else if (playerSelection === computerSelection) {
        return "Draw";
      }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i= 0; i < 5; i++) {
        let result = playRound(getComputerChoice(), getUserChoice());
        console.log(result)
        if (result == "You lose! Paper beats Rock" || result == "You lose! Rock beats Scissors" || result == "You lose! Scissors beats Paper") {
            computerScore += 1;
        } else if (result == "You win! Paper beats Rock" || result == "You win! Rock beats Scissors" || result == "You win! Scissors beats Paper") {
            userScore += 1;
        } else {

        }
    }
    if (userScore > computerScore) {
        return "You won! LESGOOOOOO!!";
    } else {
        return "You lost";
    }
}

console.log(game());