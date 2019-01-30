
// game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessButton = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assing UI min and max values to elements.
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessButton.addEventListener('click',function(){
  let guess = parseInt(guessInput.value);

  // validate 
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }

  // check if won

  if( guess === winningNum) {
    // game over - won;
    handleGameOver(true,'Correct! You win.');
  }
  else {
    guessesLeft--;
    if(guessesLeft===0) {
      //game over - lost

      handleGameOver(false,`Game over! The correct number was ${winningNum}`);
    }
    else {
      //game continues - answer wrong

      guessInput.style.borderColor = 'red';
      guessInput.value = '';

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');

    }
  }
});

function handleGameOver(won,message) {
  let color;
  won ? color = 'green': color ='red';
  guessInput.disabled = true;
  guessInput.style.border = `1px solid ${color}`;
  setMessage(message,color);
}

function setMessage(msg,color) {
  message.style.color = color;
  message.textContent = msg;
}