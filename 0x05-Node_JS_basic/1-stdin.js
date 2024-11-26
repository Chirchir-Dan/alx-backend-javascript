process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

/* 'end' event occurs when there is no more data to be read from the input stream */
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
