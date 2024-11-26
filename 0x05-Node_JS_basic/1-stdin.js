#!/usr/bin/env node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk.toString().trim()}\n`);
    if (process.stdin.isTTY) {
      process.exit(0); // Exit immediately for interactive input
    }
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
