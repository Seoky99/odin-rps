let playerWins = 0;
let computerWins = 0; 
let draws = 0;

function computerPlay() {
    let result; 
    let compValue = computerRoll(); 
    switch (compValue) {
        case 0: 
            result = 'Rock';
            break; 
        case 1: 
            result = 'Paper';
            break; 
        case 2: 
            result = 'Scissors'; 
            break; 
    }
    return result; 
}

function computerRoll() {
    return Math.floor(Math.random() * 3); 
}

function playRound(playerSelection, computerSelection) {
    let sanitized = sanitizeInput(playerSelection);
    let playerChoice = sanitized.charAt(0).toUpperCase() + sanitized.slice(1); 

    if (playerChoice === computerSelection) {
        draws++; 
        return `You Tied! ${playerChoice} ties with ${computerSelection}!`
    } else if (playerLoses(playerChoice, computerSelection)) {
        computerWins++; 
        return `You Lost! ${computerSelection} beats ${playerChoice}!`
    } else {
        playerWins++; 
        return `You Won! ${playerChoice} beats ${computerSelection}!`
    }
}

function playerLoses(playerChoice, computerSelection) {
    return ((playerChoice === 'Rock' && computerSelection === 'Paper') ||
    (playerChoice === 'Paper' && computerSelection === 'Scissors') ||
    (playerChoice === 'Scissors' && computerSelection === 'Rock'))
}

function sanitizeInput(playerSelection){
    return playerSelection.toLowerCase(); 
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Rock, Paper, or Scissors?"); 
        let computerSelection = computerPlay(); 
        let result = playRound(playerInput, computerSelection); 
        console.log(result); 
    }   
    console.log(winner(playerWins, computerWins, draws));
    resetGame(); 
}

function winner(w, l, d) {
    if (w == l) {
        return `You have tied the computer! You won ${w} times and the
        computer has also won ${l} times, and you have drawn ${d} times!`
    } else if (w > l) {
        return `You have won against the computer! You won ${w} times and the
        computer has won a mere ${l} times, and you have drawn ${d} times!`
    } else {
        return `You have lost to the computer! You unfortunately won ${w} times, but the
        computer has won ${l} times, and you have drawn ${d} times!`
    }
}

function resetGame() {
    computerWins = 0; 
    draws = 0; 
    playerWins = 0; 
}