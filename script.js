let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9 + 1);
}

const compareGuesses = (humanGuess, compGuess, targetGuess) => {
    let hum = Math.abs(humanGuess - targetGuess);
    let comp = Math.abs(compGuess - targetGuess);

    if (hum < comp) {
        return true;
    } else if (hum > comp) {
        return false;
    } else {
        return true;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}