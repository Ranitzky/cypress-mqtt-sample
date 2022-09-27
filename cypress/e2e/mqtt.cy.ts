describe('empty spec', () => {
  it('passes', () => {
    cy.task('connect', {
      topic: 'cypress',
      message: 'This will be output to the terminal',
    });
    
    // cy.exec('npm run mqtt', {failOnNonZeroExit: false})
    cy.connect({topic: 'cypress', message: 'Hello from Cypress'})
  });
});
