#!/usr/bin/env node

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Remove trailing spaces or newlines
  console.log(`Your name is: ${name}`);
});

// Handle the end event for piped input
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

// Handle process exit with a closing message
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});

// Export the module (not strictly necessary for this specific program,
// but added for testing purposes as per requirements)
module.exports = process;
