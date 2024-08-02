// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to play the "Even or Odd" game
function playEvenOrOdd() {
    // Get the user's guess from the radio buttons
    const guess = document.querySelector('input[name="guess"]:checked');
    
    // If no guess is selected, display a message and return early
    if (!guess) {
        document.getElementById('result').innerHTML = 'Please select "Even" or "Odd" to play.';
        return;
    }
    
    // Generate two random numbers between 1 and 6 (like rolling two dice)
    const die1 = getRandomNumber(1, 6);
    const die2 = getRandomNumber(1, 6);
    
    // Calculate the sum of the two dice
    const sum = die1 + die2;
    
    // Determine if the sum is even or odd
    const result = (sum % 2 === 0) ? 'even' : 'odd';
    
    // Get the image element to display the result image
    const resultImage = document.getElementById('resultImage');
    
    // Check if the user's guess matches the result
    if (guess.value === result) {
        // User wins, change the background color to green
        document.body.style.backgroundColor = 'green';
        document.getElementById('result').innerHTML = `You rolled ${die1} and ${die2} (sum: ${sum}). The sum is ${result}. You guessed ${guess.value} – you win!`;
        resultImage.src = 'win.jpg'; // Set the image to the win image
    } else {
        // User loses, change the background color to red
        document.body.style.backgroundColor = 'red';
        document.getElementById('result').innerHTML = `You rolled ${die1} and ${die2} (sum: ${sum}). The sum is ${result}. You guessed ${guess.value} – you lose.`;
        resultImage.src = 'lose.jpg'; // Set the image to the lose image
    }
    
    // Display the image
    resultImage.style.display = 'block';
}