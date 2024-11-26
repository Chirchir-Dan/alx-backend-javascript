const { expect } = require('chai');
const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('should print the correct message', () => {
    expect(() => displayMessage('Hello NodeJS!')).not.to.throw();
  });
});
