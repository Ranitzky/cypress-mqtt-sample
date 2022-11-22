import './commands';

export type Mqtt = {topic: string, message: string}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to send mqtt message via node.
       * @example cy.publishMessage({topic: 'cypress', message: 'Hello from Cypress'})
       */
      publishMessage(mqtt: Mqtt): Chainable<Element>;
    }
  }
}
