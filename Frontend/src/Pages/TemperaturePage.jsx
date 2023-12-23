import React, { useEffect, useState } from 'react';
import mqttClient from '../../../MQTT/mqttService';
import './TemperaturePage.css'; // Import the CSS file for styles

const TemperaturePage = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    mqttClient.subscribe('temperature/sensor');

    mqttClient.on('message', (topic, message) => {
      console.log(`Received message on topic ${topic}: ${message.toString()}`);
      setTemperature(parseFloat(message.toString()));
    });

    return () => {
      mqttClient.unsubscribe('temperature/sensor');
    };
  }, []);

  const handleButtonClick = () => {
    console.log('Button clicked!');
    mqttClient.publish('temperature/sensor/request', 'get_temperature');
  };

  return (
    <div className="container">
      <h1 className="heading">Temperature page</h1>
      <div className="buttonContainer">
        <button className="button" onClick={handleButtonClick}>
          Get Temperature
        </button>
      </div>
      <div className="temperatureBox">
        {temperature !== null ? (
          <>
            <p className="temperature">Temperature: {temperature.toFixed(2)} °C</p>
            <div className="infoBox">
              <p className="info">Description: {getDescription(temperature)}</p>
            </div>
          </>
        ) : (
          <p className="message">Click the button to get temperature</p>
        )}
      </div>
    </div>
  );
};

const getDescription = (temperature) => {
  if (temperature < 30) {
    return 'Très Froid';
  } else if (temperature >= 30 && temperature < 34) {
    return 'Froid';
  } else if (temperature >= 34 && temperature < 37) {
    return 'Agréable';
  } else if (temperature >= 37 && temperature < 38) {
    return 'Chaud';
  } else {
    return 'Très Chaud';
  }
};

export default TemperaturePage;
