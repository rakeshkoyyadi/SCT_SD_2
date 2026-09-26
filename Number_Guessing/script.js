// ---------- Grab references to the HTML elements we need ----------
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const resultMessage = document.getElementById('resultMessage');
const attemptsCount = document.getElementById('attemptsCount');
const newGameBtn = document.getElementById('newGameBtn');

// ---------- Game state variables ----------
let randomNumber;   // the secret number the player is trying to guess
let attempts;       // how many guesses the player has made
let gameOver;       // true once the player has guessed correctly

// ---------- Start / reset the game ----------
function startNewGame() {
  // Generate a random whole number between 1 and 100 (inclusive).
  // Math.random() gives a decimal between 0 and 1 (e.g. 0.734).
  // Multiplying by 100 spreads it across 0–99.99...
  // Math.floor() rounds down to a whole number (0–99).
  // Adding 1 shifts the range to 1–100.
  randomNumber = Math.floor(Math.random() * 100) + 1;

  attempts = 0;
  gameOver = false;

  // Reset the UI back to its starting state
  attemptsCount.textContent = attempts;
  resultMessage.textContent = '';
  resultMessage.className = 'result-message';
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.focus();
}

// ---------- Show a message with a small animation ----------
function showMessage(text, className) {
  resultMessage.textContent = text;
  // Reset the class first so the animation can replay every time
  resultMessage.className = 'result-message';
  // Force a tiny reflow so the browser "notices" the class was removed
  void resultMessage.offsetWidth;
  resultMessage.classList.add(className, 'animate-message');
}

// ---------- Handle a guess submission ----------
function handleGuess() {
  if (gameOver) return; // safety check, shouldn't happen since button is disabled

  const rawValue = guessInput.value.trim();

  // 1) Prevent empty input
  if (rawValue === '') {
    showMessage('Please enter a number before guessing.', 'error');
    return;
  }

  const userGuess = Number(rawValue);

  // 2) Prevent invalid/non-numeric input (Number() turns bad input into NaN)
  if (Number.isNaN(userGuess)) {
    showMessage('That is not a valid number.', 'error');
    return;
  }

  // 3) Prevent numbers outside the allowed range
  if (userGuess < 1 || userGuess > 100) {
    showMessage('Please enter a number between 1 and 100.', 'error');
    return;
  }

  // Valid guess — count the attempt
  attempts++;
  attemptsCount.textContent = attempts;

  // 4) Compare the guess to the random number
  if (userGuess > randomNumber) {
    showMessage('Too high! Try again.', 'too-high');
  } else if (userGuess < randomNumber) {
    showMessage('Too low! Try again.', 'too-low');
  } else {
    // Correct guess!
    gameOver = true;
    showMessage(
      `Correct! You guessed the number ${randomNumber} in ${attempts} attempt(s).`,
      'correct'
    );
    guessBtn.disabled = true; // disable further guessing until New Game is clicked
  }

  guessInput.value = '';
  guessInput.focus();
}

// ---------- Event listeners ----------
guessBtn.addEventListener('click', handleGuess);

// Allow pressing Enter inside the input field to submit a guess
guessInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleGuess();
  }
});

newGameBtn.addEventListener('click', startNewGame);

// ---------- Kick off the first game when the page loads ----------
startNewGame();
