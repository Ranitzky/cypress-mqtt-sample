const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://broker.mqttdashboard.com')

const message = process.env.MESSAGE
const topic = process.env.TOPIC

function a(topic, message){
  console.log(topic, message)
  client.on('connect', function () {
    client.subscribe('cypress', function (err) {
      if (!err) {
        client.publish('cypress', message)
      }
    })
  })
}

a(topic, message);



// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
//   client.end()
// })
