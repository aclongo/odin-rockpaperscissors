// Function to return computer choice
// A random number between 0 and 1 is generated, multiplied by 3 to become 0-2, and rounded down to a whole number
// Each number is mapped to a choice
function getComputerChoice() {
  randNum = Math.floor(Math.random() * 3);
  if (randNum === 0){
    return 'rock'
  } else if (randNum === 1){
    return 'paper'
  } else {
    return 'scissors'
  }
};

// Function to retrieve input from the player, validate the choice, and send it back to the game
// player choice is case-insensitive
function getPlayerChoice() {
  const choices = ['rock','paper','scissors'];
  let playerChoice;
  while (true) {
    input = prompt('Make your choice: rock, paper or scissors?')
    playerChoice = input.toLowerCase();
    if (choices.includes(playerChoice)) {
      break;
    }
  }
  return playerChoice
};

// Function to determine winner for single round
// Take two parameters (playerSelection, computerSelection), compare choices, determine and return a winner:
function playRound(playerSelection, computerSelection) {
  let roundResult;
  if (playerSelection === computerSelection) {
    roundResult = 'tie';
  } else if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        roundResult = 'computer';
      } else {
        roundResult = 'player';
      }
  } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        roundResult = 'player';
      } else {
        roundResult = 'computer';
      }
  } else {
      if (computerSelection === 'rock') {
        roundResult = 'computer';
      } else {
        roundResult = 'player';
      }
  }
  console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.`)
  return roundResult
};

// Function to play 5 rounds of the game by looping 5 times
// Each loop calls for a new computer and player choice
// Scores increment based on the results of playRound and a message is logged
// Track and log current scores
// Report winner or loser after the last iteration of the loop
function game() {
  for (let round = 1; round < 6; round++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let roundWinner = playRound(playerSelection, computerSelection);
    if (roundWinner === 'tie') {
      console.log(`ROUND ${round}/5: This round is a tie!`);
    } else if (roundWinner === 'player') {
      console.log(`ROUND ${round}/5: You beat the computer this round!`);
      playerScore++;
    } else {
      console.log(`ROUND ${round}/5: The computer beat you this round!`);
      computerScore++;
  }
  console.log('Player score: ' + playerScore);
  console.log('Computer score: ' + computerScore);
  }
  console.log(`FINAL SCORES: Player ${playerScore}, Computer ${computerScore}`);
  if (playerScore === computerScore) {
    console.log('The game resulted in a tie!');
  } else if (playerScore > computerScore) {
    console.log('Hooray - You win the game!');
  } else {
    console.log('Too bad - The computer won the game!');
  }
};

console.log('ROCK PAPER SCISSORS GAME - by aclongo for the Odin Project')
let playerScore = 0;
let computerScore = 0;
game();