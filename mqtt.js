const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.mqttdashboard.com');

const message = process.env.MESSAGE;
const topic = process.env.TOPIC;

function publishMessage(topic, message) {
  client.on('connect', () => {
    client.publish(topic, message);
    client.end();
  });
}

publishMessage(topic, message);
