#!/usr/bin/env node

/**
 * Prompt the user for their name, display it, and handle different input methods.
 */
function promptUser() {
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.once('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);

    if (!process.stdin.isTTY) {
      console.log('This important software is now closing');
    }

    process.exit(0); // Terminate the program
  });

  process.stdin.resume();
}

// Export the function
module.exports = promptUser;

// Execute the function only if the file is run directly
if (require.main === module) {
  promptUser();
}
