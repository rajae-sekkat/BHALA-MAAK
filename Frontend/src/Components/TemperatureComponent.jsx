import React from "react";
import  { useState, useEffect } from 'react';
import mqttClient from '../../../MQTT/mqttService';

function TemperatureComponent(){

    //set temperature and heartRate using mosquitto broker as subscriber
  const [temperature, setTemperature] = useState(null);

     useEffect(() => {
    mqttClient.subscribe('sensor/DHT11/temperature_celsius');
  
    mqttClient.on('message', (topic, message) => {
      console.log(`Received message on topic ${topic}: ${message.toString()}`);
  
      if (topic === 'sensor/DHT11/temperature_celsius') {
        const newTemperature = parseFloat(message.toString());
        setTemperature(newTemperature);
      } 
    });
  
    return () => {
      mqttClient.unsubscribe('sensor/DHT11/temperature_celsius');
      
    };
  }, []);
    


    return (
        <div>
            <p className="text"> Your Current Temperature Level</p>
            <p>
            Temperature: {temperature !== null ? temperature.toFixed(2) : 'N/A'} °C
            </p>
          </div>
    )



}

export default TemperatureComponent;
