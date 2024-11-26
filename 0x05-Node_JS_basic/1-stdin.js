#!/usr/bin/env node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle input when it's piped or entered interactively
process.stdin.once('data', (chunk) => {
  const name = chunk.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);

  if (!process.stdin.isTTY) {
    // Closing message for piped input
    process.stdin.on('end', () => {
      process.stdout.write('This important software is now closing\n');
    });
  } else {
    // Exit immediately for interactive input
    process.exit(0);
  }
});

// Resume stdin
process.stdin.resume();
