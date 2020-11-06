'use strict';
// Task To do

// 1. Generate random secret number between 1 to 20

/****************Check button************/
// 2. If no input is given then display message '⛔ No Number!'
// 3. If guessing number is greater than secret number then display message '📈 Too High!' and decrease score by one.
// 4. If guessing number is less than secret number then display message '📉 Too Low!' and decrease score by one.
// 5. If guessing number is equal to secret number than display '🎉 Correct Number!', change background to #60b347, display secret number in the place of "?" and chnage the width of number to 30rem
// 6. If score is 0 then display message '💣 You lost the Game!'
// 7. If score is higher then high score record it as a high score

/**************Again Buttun / reset game***********/

// 8. Reset message, input, secert number, score, background, width of the number

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess !== secretNum) {
    if (guess < 20) {
      if (score > 1) {
        displayMessage(guess > secretNum ? '📈 Too High!' : '📉 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage(`You lost the Game! and number is ${secretNum}`);
        document.querySelector('.score').textContent = 0;
      }
    } else {
      displayMessage('Please input number between 1 t0 20!');
    }
  } else if (guess === secretNum) {
    if (score > 1) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNum;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      //   displayMessage('💣 You lost the Game!');
      displayMessage(`You lost the Game! and number is ${secretNum}`);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
