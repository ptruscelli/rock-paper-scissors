

let humanScore = 0;
let computerScore = 0;
let round = 1;
let playerChoice = '';


const compWins = 'Computer Wins! '
const playWins = 'Player Wins! '
const rockWins = 'Rock beats Scissors.'
const papWins = 'Paper beats Rock.'
const scisWins = 'Scissors beats Paper.'

const announcer = document.querySelector('#announcer');
announcer.textContent = "Select a weapon to start playing.";

const section = document.querySelector("#scores");

const endGameEvent = new Event("endGame");
document.addEventListener("endGame", () => {

    const newGameDiv = document.createElement("div");
    const newGameBtn = document.createElement("button");
    newGameBtn.textContent = "Start New Game";

    newGameDiv.appendChild(newGameBtn);
    scores.appendChild(newGameDiv);

    newGameBtn.addEventListener("click", () => {
        humanScore = 0; computerScore = 0;
        setScores();
        announcer.textContent = "New game started!";
        newGameDiv.remove();
    });
});

function setScores() {
    document.querySelector('#playerScore').textContent = humanScore;
    document.querySelector('#compScore').textContent = computerScore;
};


function getComputerChoice() {
// use math.random * 100 and math.floor to get number between 0 and 99
// use if-else statements, assign rock to 0-32, paper 33-65, scissors 66-99
// return 1 of 3 string values depending on outcome
    let randomNum = Math.floor(Math.random() * 100);
    let computerChoice;

    if (randomNum <= 32) {
        computerChoice = 'rock';
    } else if (randomNum >= 33 && randomNum <= 65) {
        computerChoice = 'paper';
    } else if (randomNum >= 66) {
        computerChoice = 'scissors';
    }

    return computerChoice
}


const choices = document.querySelector('#weaponChoices');

choices.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playerChoice = 'rock';
            break;
        case 'paper':
            playerChoice = 'paper';
            break;
        case 'scissors':
            playerChoice = 'scissors';
            break;
    }

    playRound();
});


function playRound() {
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        announcer.textContent = "It's a draw! You both chose " + playerChoice + ".";
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        announcer.textContent = compWins + papWins;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        announcer.textContent = playWins + rockWins;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        announcer.textContent = playWins + papWins;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        announcer.textContent = compWins + scisWins;
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        announcer.textContent = compWins + rockWins;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        announcer.textContent = playWins + scisWins;
    }

    setScores();
    
    

    if (humanScore == 3) {
        alert(`Player has won the game 3 - ${computerScore}!! Congratulations.`);
        computerScore = 0; humanScore = 0;
        document.dispatchEvent(endGameEvent);
    } else if (computerScore == 3) {
        alert(`Computer has won the game ${humanScore} - 3!! Better luck next time..`);
        computerScore = 0; humanScore = 0;
        document.dispatchEvent(endGameEvent);
    }
}






/*
function getPlayerChoice() {
    let playerChoice;
    let choice = prompt("Choose your weapon:\n \
    Press r for Rock\n \
    Press p for Paper\n \
    Press s for Scissors");

    if (choice.toLowerCase() === "r") {
        playerChoice = 'rock';
    } else if (choice.toLowerCase() === 'p') {
        playerChoice = 'paper';
    } else if (choice.toLowerCase() === 's') {
        playerChoice = 'scissors';
    }

    return playerChoice;
}
// function for human choice 
// use prompt to ask for 'r', 'p' or 's' 
// assign each letter to the correct corresponding choice
// return said choice as string 
*/