import './commands';

export type Mqtt = {topic: string, message: string}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to login.
       * @example cy.connect({topic: 'cypress', message: 'Hello from Cypress'})
       */
      connect(mqtt: Mqtt): Chainable<Element>;
    }
  }
}
