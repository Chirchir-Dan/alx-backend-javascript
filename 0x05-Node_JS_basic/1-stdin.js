#!/usr/bin/env node

function main() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');

  process.stdin.on('readable', () => {
    const name = process.stdin.read();
    if (name !== null) {
      process.stdout.write(`Your name is: ${name}`);
      if (process.stdin.isTTY) {
        process.exit(0); // Exit immediately for interactive input
      }
    }
  });

  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

module.exports = main;

// If the script is executed directly, run the main function
if (require.main === module) {
  main();
}
