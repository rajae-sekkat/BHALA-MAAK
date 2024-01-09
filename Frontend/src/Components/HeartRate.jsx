import React from "react";
import  { useState, useEffect } from 'react';
import mqttClient from '../../../MQTT/mqttService';

function HeartRate(){

    const [heartRate, setHeartRate] = useState(null);
    useEffect(() => {

        mqttClient.subscribe('heart-rate/sensor');
      
        mqttClient.on('message', (topic, message) => {
          console.log(`Received message on topic ${topic}: ${message.toString()}`);
      
           if (topic === 'heart-rate/sensor') {
            const newHeartRate = parseFloat(message.toString());
            setHeartRate(newHeartRate);
          }
        });
      
        return () => {
          mqttClient.unsubscribe('heart-rate/sensor');
        };
      }, []);
    


    return (
        <div>
            <p className="text">Your Current Heart Rate</p>
            <p>
            Heart Rate: {heartRate !== null ? heartRate.toFixed(2) : 'N/A'} BPM
            </p>
          </div>
    )



}

export default HeartRate;
