import React, { useEffect, useState } from 'react';
import './HeartRatePage.css'
import mqttClient from '../../../MQTT/mqttService';

const HeartRatePage = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    mqttClient.subscribe('heart-rate/sensor');

    mqttClient.on('message', (topic, message) => {
      console.log('Received message on topic ${topic}: ${message.toString()}');
      const newHeartRate = parseFloat(message.toString());
      setHeartRate(newHeartRate);
      updateDescription(newHeartRate);
    });

    return () => {
      mqttClient.unsubscribe('heart-rate/sensor');
    };
  }, []);

  const updateDescription = (newHeartRate) => {
    // Ajoutez ici la logique pour définir la description en fonction de la valeur du rythme cardiaque
    if (newHeartRate < 60) {
      setDescription('Le rythme cardiaque est faible. Consultez un professionnel de la santé si nécessaire.');
    } else if (newHeartRate >= 60 && newHeartRate <= 100) {
      setDescription('Le rythme cardiaque est normal.');
    } else {
      setDescription('Le rythme cardiaque est élevé. Consultez un professionnel de la santé si nécessaire.');
    }
  };

  const handleButtonClick = () => {
    console.log('Button clicked!');
    mqttClient.publish('heart-rate/sensor/request', 'get_heart_rate');
  };

  return (
    <div  className='container'>
      <h1  className='heading'>Heart Rate Viewer</h1>
      <button  className='button' onClick={handleButtonClick}>
        Get Heart Rate
      </button>
      <div  className='heartRateBox'>
        {heartRate !== null ? (
          <div>
            <p  className='heartRate'>Heart Rate: {heartRate.toFixed(2)} BPM</p>
            <p  className='description'>{description}</p>
          </div>
        ) : (
          <p className='message'>Click the button to get heart rate</p>
        )}
      </div>
    </div>
  );
};

export default HeartRatePage;