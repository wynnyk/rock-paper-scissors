uScoreVal = document.querySelector('.uScoreVal');
cScoreVal = document.querySelector('.cScoreVal');
roundWinner = document.querySelector('.roundWinner');
let computerScore = 0;
let userScore = 0;
let maxScore = 5;

var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');

function handleRockClick() {
  playRound("Rock", getComputerChoice());
}

function handlePaperClick() {
  playRound("Paper", getComputerChoice());
}

function handleScissorsClick() {
  playRound("Scissors", getComputerChoice());
}

var winnerDiv = document.createElement("div");
winnerDiv.className = 'winnerDiv';
winnerDiv.style.display = 'flex';
winnerDiv.style.justifyContent = 'center';
winnerDiv.style.marginTop = '50px';
winnerDiv.style.fontFamily = 'Chalkduster, fantasy';
winnerDiv.style.color = 'Red';
winnerDiv.style.fontSize = '40px';

var playAgain = document.createElement("span");
playAgain.className = 'playAgain';
playAgain.style.fontFamily = 'Chalkduster, fantasy';
playAgain.style.color = 'Red';
playAgain.style.fontSize = '40px';
playAgain.style.border = '3px solid gray';
playAgain.style.borderRadius = '10px';
playAgain.style.padding = "8px";
playAgain.style.marginLeft = "10px";
playAgain.textContent = 'Play Again?';
playAgain.addEventListener('click', function() {
  location.reload()
});



rock.addEventListener('click', handleRockClick);
paper.addEventListener('click', handlePaperClick);
scissors.addEventListener('click', handleScissorsClick);

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore += 1;
        roundWinner.textContent = "You lose! Paper Beats Rock!"
      } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        userScore += 1;
        roundWinner.textContent = "You win! Paper Beats Rock!"
      } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        userScore += 1;
        roundWinner.textContent = "You win! Rock Beats Scissors!"
      } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore += 1;
        roundWinner.textContent = "You lose! Rock Beats Scissors!"
      } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore += 1;
        roundWinner.textContent = "You lose! Scissors Beats Paper!"
      } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        userScore += 1;
        roundWinner.textContent = "You win! Scissors Beats Paper!"
      } else if (playerSelection === computerSelection) {
        roundWinner.textContent = "It's a tie!"
      }
      updateScores();
      if (userScore == maxScore || computerScore == maxScore) {
        disableButtons();
        gameEnd();
      }
    }
    
    function updateScores() {
      uScoreVal.textContent = userScore.toString();
      cScoreVal.textContent = computerScore.toString();
    }

    function disableButtons() {
      rock.removeEventListener('click', handleRockClick);
      paper.removeEventListener('click', handlePaperClick);
      scissors.removeEventListener('click', handleScissorsClick);
    }

    function gameEnd() {
      if (computerScore === maxScore) {
        winnerDiv.textContent = 'The computer beat you!!';
      } else if (userScore === maxScore) {
          winnerDiv.textContent = 'You beat the computer!!';
        } 
        winnerDiv.appendChild(playAgain);
        document.body.appendChild(winnerDiv);
      }
    
 
  

    
   




