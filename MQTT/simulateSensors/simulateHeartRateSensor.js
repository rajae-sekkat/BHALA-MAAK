const mqtt = require('mqtt');


const brokerUrl = 'mqtt://localhost:1883'; // Assurez-vous que l'URL correspond à votre broker MQTT local
const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

setInterval(() => {
  const heartRate = Math.random() * 40 + 60; // Simulez une fréquence cardiaque entre 60 et 100
  client.publish('heart-rate/sensor', heartRate.toString());
},  1000); // Publier une nouvelle valeur toutes les 5 secondes