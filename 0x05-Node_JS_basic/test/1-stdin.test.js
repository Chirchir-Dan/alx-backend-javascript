const assert = require('assert');
const { spawn } = require('child_process');

describe('1-stdin.js', function () {
  this.timeout(5000); // Increase the timeout to 5000ms for async input/output

  it('should display name correctly with interactive input', function (done) {
    const process = spawn('node', ['1-stdin.js']);
    
    let output = '';
    process.stdout.on('data', (data) => {
      output += data.toString();
    });

    process.stdin.write('Alice\n'); // Simulate interactive input
    process.stdin.end();

    process.stdout.on('end', () => {
      assert(output.includes('Your name is: Alice'));
      done(); // Indicate that the test is finished
    });
  });

  it('should handle another name input', function (done) {
    const process = spawn('node', ['1-stdin.js']);
    
    let output = '';
    process.stdout.on('data', (data) => {
      output += data.toString();
    });

    process.stdin.write('Bob\n'); // Simulate interactive input
    process.stdin.end();

    process.stdout.on('end', () => {
      assert(output.includes('Your name is: Bob'));
      done(); // Indicate that the test is finished
    });
  });
});
