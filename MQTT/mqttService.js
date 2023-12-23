// mqttService.js
import mqtt from 'mqtt';

const brokerUrl = 'mqtt://localhost:9001'; // Remplacez par l'URL de votre broker
const mqttClient = mqtt.connect(brokerUrl);

mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
});

export default mqttClient;

