import { Mqtt } from '../../support/e2e';

export const connect = (mqtt: Mqtt) => {
  const { topic, message } = mqtt;
  cy.exec(`node server`, {
    failOnNonZeroExit: false,
    env: { TOPIC: topic, MESSAGE: message },
  });
};

// export const connect = (mqtt: Mqtt) => {
//   client.on('connect', function () {
//     client.subscribe('cypress', function (err) {
//       if (!err) {
//         client.publish('cypress', 'Hello from nodejs')
//       }
//     })
//   })
// }
