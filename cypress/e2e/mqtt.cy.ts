describe('Send mqtt data', () => {
  it('Send data to broker via Cypress task', () => {
    cy.task('publishMessage', {
      topic: 'cypress',
      message: 'This will be send to the MQTT broker via Cypress task',
    });
  });

  it('Send data to broker via custom command to node', () => {
    cy.publishMessage({
      topic: 'cypress',
      message:
        'This will be send to the MQTT broker via custom command to node',
    });
  });
});
