


let humanScore = 0;
let computerScore = 0;
let round = 1;

console.log("Welcome to Rock, Paper, Scissors.");

function getComputerChoice() {
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
// use math.random * 100 and math.floor to get number between 0 and 99
// use if-else statements, assign rock to 0-32, paper 33-65, scissors 66-99
// return 1 of 3 string values depending on outcome


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
const compWins = 'Computer Wins! '
const playWins = 'Player Wins! '
const rockWins = 'Rock beats Scissors.'
const papWins = 'Paper beats Rock.'
const scisWins = 'Scissors beats Paper.'

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    console.log(`Computer chose ${computerChoice}, Player chose ${playerChoice}.`)



    if (playerChoice === computerChoice) {
        console.log("It's a draw! You both chose " + playerChoice + ".");
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log(compWins + papWins);
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log(playWins + rockWins);
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log(playWins + papWins);
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log(compWins + scisWins);
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log(compWins + rockWins);
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log(playWins + scisWins);
    }

    console.log(`The score is Player ${humanScore}:${computerScore} Computer`)

    if (humanScore == 3) {
        console.log(`Player has won the game!! Congratulations.`);
    } else if (computerScore == 3) {
        console.log(`Computer has won the game!! Better luck next time..`);
    } else {
        playRound()
    }
}


function playGame() {
    console.log(`This is a best of 5; first to 3 wins the game. Good luck...`);

    playRound()
    
}