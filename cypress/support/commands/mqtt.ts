import { Mqtt } from '../../support/e2e';

export const publishMessage = (mqtt: Mqtt) => {
  const { topic, message } = mqtt;
  cy.exec(`npm run mqtt`, {
    failOnNonZeroExit: false,
    env: { TOPIC: topic, MESSAGE: message },
  });
};
