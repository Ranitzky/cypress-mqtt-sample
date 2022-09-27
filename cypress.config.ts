import { defineConfig } from 'cypress';
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.mqttdashboard.com');

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        connect({topic, message}) {
          console.log(message)
          client.on('connect', function () {
            client.subscribe(topic, function (err) {
              if (!err) {
                client.publish(topic, message)
              }
            })
          })
          
          // client.on('connect', function () {
          //   client.subscribe(topic, function (err) {
          //     if (!err) {
          //       client.publish(topic, message);
          //     }
          //   });
          // });
          return null;
        }
      });
    },
  },
});
