const mqtt = require('mqtt');

const brokerUrl = 'mqtt://localhost:1883'; // Assurez-vous que l'URL correspond à votre broker MQTT local
const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

setInterval(() => {
  // Générez une valeur de température dans la plage spécifiée
  const temperature = Math.random() * (38 - 10) + 10;

  // Affichez la température générée dans la console
  console.log('Generated Temperature:', temperature);

  // Publiez la valeur de température sur le topic MQTT
  client.publish('temperature/sensor', temperature.toString());
}, 1000);
