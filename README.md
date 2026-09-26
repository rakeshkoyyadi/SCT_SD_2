# 🎯 Number Guessing Game

A simple and interactive **Number Guessing Game** built using **HTML, CSS, and JavaScript**. The application generates a random number between **1 and 100** and challenges the user to guess the hidden number.

## 📌 Project Description

The game automatically generates a secret number when the page loads. The player enters a guess, and the application provides hints such as **"Too high!"** or **"Too low!"** until the correct number is guessed.

The game also tracks the number of valid attempts and allows the player to start a new game whenever they want.

## ✨ Features

* 🎲 Generates a random number between 1 and 100
* 🔢 Allows users to enter their guesses
* ⬆️ Displays **"Too high!"** when the guess is greater than the secret number
* ⬇️ Displays **"Too low!"** when the guess is smaller than the secret number
* 🎉 Displays a success message when the correct number is guessed
* 📊 Tracks the number of attempts
* 🚫 Validates invalid, empty, and out-of-range inputs
* ⌨️ Supports pressing **Enter** to submit a guess
* 🔄 Includes a **New Game** button
* 🌐 Runs directly in a web browser without a server

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and layout
* **JavaScript** – Game logic, random number generation, validation, and user interaction

## 📂 Project Structure

```text
number-guessing-game/
│
├── index.html
├── style.css
├── script.js

```

## 🚀 How to Run

No installation, server, or additional setup is required.

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/number-guessing-game.git
```

### Step 2: Open the Project Folder

```bash
cd number-guessing-game
```

### Step 3: Run the Game

Open the `index.html` file in any modern web browser.

You can either:

* Double-click `index.html`
* Right-click → **Open with** → Select your browser

A new secret number will automatically be generated when the page loads.

## 🎲 How Random Number Generation Works

The game uses JavaScript's `Math.random()` function to generate a random number.

```javascript
Math.floor(Math.random() * 100) + 1
```

This generates a whole number between **1 and 100**.

### Process

1. `Math.random()` generates a decimal value from `0` up to, but not including, `1`.
2. Multiplying by `100` gives a value between `0` and `99.99...`.
3. `Math.floor()` converts it into a whole number from `0` to `99`.
4. Adding `1` changes the range to **1–100**.

A new number is generated whenever the page loads or the **New Game** button is clicked.

## 🧠 How the Game Works

When the player submits a guess:

1. The application checks whether the input is valid.
2. The guess must be a whole number between **1 and 100**.
3. Valid guesses increase the attempt counter.
4. The guess is compared with the secret number.
5. The application provides a hint:

   * Guess is greater → **Too high!**
   * Guess is smaller → **Too low!**
   * Guess is equal → **Correct!**
6. Once the correct number is guessed, the Guess button is disabled.
7. Clicking **New Game** resets the game and generates a new secret number.

## 🧪 Test Cases

For testing purposes, assume the hidden secret number is **42**.

| Guess | Expected Result                                   |
| ----: | ------------------------------------------------- |
|    70 | Too high! Try again.                              |
|    15 | Too low! Try again.                               |
|    42 | Correct! You guessed the number 42 in 3 attempts. |
| Empty | Please enter a number before guessing.            |
|   150 | Please enter a number between 1 and 100.          |
|   abc | Please enter a valid whole number.                |

Invalid inputs do **not** increase the attempt count.

## 🔄 New Game

Clicking the **New Game** button:

* Generates a new secret number
* Resets the attempt count to `0`
* Clears the previous result message
* Clears the input field
* Enables the Guess button again

## 🎯 Learning Objectives

This project helps demonstrate:

* JavaScript variables
* Random number generation
* `Math.random()` and `Math.floor()`
* Conditional statements
* Functions
* DOM manipulation
* Event handling
* Input validation
* Keyboard events
* Button state management

## 🔮 Future Improvements

Possible future enhancements include:

* Add difficulty levels
* Add a maximum number of attempts
* Add a scoring system
* Add a timer
* Add sound effects
* Add a leaderboard
* Store high scores using Local Storage
* Add animations and improved UI
* Add different number ranges for different difficulty levels

## 👨‍💻 Author

**Rakesh**

