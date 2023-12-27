import React from "react";
import  { useState, useEffect } from 'react';
import "./VitalParameterPage.css";
import NavBar from "../Components/NavBar";
import mqttClient from '../../../MQTT/mqttService';

function VitalParameterPage() {
  //set current sugar level
  const [showPopup, setShowPopup] = useState(false);
  const [newSugarLevel, setNewSugarLevel] = useState('');
  const [currentSugarLevel, setCurrentSugarLevel] = useState('100 mg/dL');
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const updateSugarLevel = () => {
    setCurrentSugarLevel(`Sugar Level: ${newSugarLevel} mg/dL`);
    closePopup();
  };
  //set Current Pressure Level
  const [showPopup1, setShowPopup1] = useState(false);
  const [newPressureLevel, setNewPressureLevel] = useState('');
  const [currentPressureLevel, setCurrentPressureLevel] = useState('120/80 Hmmg');
  const openPopup1 = () => {
    setShowPopup1(true);
  };

  const closePopup1 = () => {
    setShowPopup1(false);
  };

  const updatePressureLevel = () => {
    setCurrentPressureLevel(`Pressure Level: ${newPressureLevel} mg/dL`);
    closePopup1();
  };
  
  //set temperature and heartRate using mosquitto broker as subscriber
  const [temperature, setTemperature] = useState(null);
  const [heartRate, setHeartRate] = useState(null);
  
  useEffect(() => {
    mqttClient.subscribe('temperature/sensor');
    mqttClient.subscribe('heart-rate/sensor');
  
    mqttClient.on('message', (topic, message) => {
      console.log(`Received message on topic ${topic}: ${message.toString()}`);
  
      if (topic === 'temperature/sensor') {
        const newTemperature = parseFloat(message.toString());
        setTemperature(newTemperature);
      } else if (topic === 'heart-rate/sensor') {
        const newHeartRate = parseFloat(message.toString());
        setHeartRate(newHeartRate);
      }
    });
  
    return () => {
      mqttClient.unsubscribe('temperature/sensor');
      mqttClient.unsubscribe('heart-rate/sensor');
    };
  }, []);

  

  return (
    <body >
      
      <NavBar></NavBar>

      <div className="principale">
          
          <div>
            <p className="text">Your Current Heart Rate</p>
            <p>
            Heart Rate: {heartRate !== null ? heartRate.toFixed(2) : 'N/A'} BPM
            </p>
          </div>
          


          {showPopup ? (
        <div className="popup">
          <label htmlFor="newSugarLevel">Enter your new sugar level:</label>
          <input
            type="text"
            id="newSugarLevel"
            value={newSugarLevel}
            onChange={(e) => setNewSugarLevel(e.target.value)}
            placeholder="e.g., 120 mg/dL"
          />
          <button onClick={updateSugarLevel}>Update</button>
          <button onClick={closePopup}>Close</button>
          <button>History</button>
        </div>
      ) : (
        <div onClick={openPopup}>
          <p className="text">Your Current Sugar Level</p>
          <p>{currentSugarLevel}</p>
        </div>
      )}

      {showPopup1 ? (
        <div className="popup">
        <label htmlFor="newPressureLevel">Enter your new  Pressure Level:</label>
        <input
          type="text"
          id="newPressureLevel"
          value={newPressureLevel}
          onChange={(e) => setNewPressureLevel(e.target.value)}
          placeholder="e.g., 120/80 Hmmg"
        />
        <button onClick={updatePressureLevel}>Update</button>
        <button onClick={closePopup1}>Close</button>
        <button>History</button>
      </div>
      ):(

        <div  onClick={openPopup1}>
            <p className="text"> Your Current Pressure Level</p>
            <p>
            {currentPressureLevel}
            </p>
          </div>

      )}

    
        
          <div>
            <p className="text"> Your Current Temperature Level</p>
            <p>
            Temperature: {temperature !== null ? temperature.toFixed(2) : 'N/A'} °C
            </p>
          </div>
          

        </div>
      
    </body>
  );
}

export default VitalParameterPage;
