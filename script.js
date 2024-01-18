'use strict';

// Initial variables
let score = 20;
let highscore = 0;

// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Function to display messages in the UI
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function to display the secret number in the UI
const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

// Function to set the value of the guess input field
const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

// Function to change the background color of the body
const displayBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// Function to display the current score in the UI
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Function to set the width of the number display in the UI
const widthGuess = function (guess) {
  document.querySelector('.number').style.width = guess;
};

// Event listener for the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // No input
    displayMessage('🛑 No Number');
  } else if (guess === secretNumber) {
    // Correct guess
    displaySecretNumber(secretNumber);
    displayMessage('🎊 Correct guess');
    displayBackgroundColor('#60b347');
    widthGuess('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // Wrong guess
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too High' : '⬇️ Too Low');
      score--;
      displayScore(score);
    } else {
      // Game over
      displayMessage('🔚 Game Over');
      displayScore(0);
    }
  }
});

// Event listener for the "Again" button
document.querySelector('.again').addEventListener('click', function () {
  // Reset the game
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayBackgroundColor('#222');
  widthGuess('15rem');
  displaySecretNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  displayScore(score);
});
