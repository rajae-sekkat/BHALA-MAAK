import React from "react";
import  { useState , useEffect} from 'react';
import axios from "axios";

function  PressureLevel(){

   //set Current Pressure Level
   const [showPopup1, setShowPopup1] = useState(false);
   const [newPressureLevel, setNewPressureLevel] = useState('');
   const [currentPressureLevel, setCurrentPressureLevel] = useState('120/80 Hmmg');
   const [username] = useState("r_sekkat");
   const pressureLevelValue = parseFloat(newPressureLevel);

   const openPopup1 = () => {
     setShowPopup1(true);
   };
 
   const closePopup1 = () => {
     setShowPopup1(false);
   };
 
  
   const updatePressureLevel = (event) => {
    event.preventDefault();
    const currentDate = new Date(); // Move inside the function to capture the current date and time when updating
    setCurrentPressureLevel(`Pressure Level: ${newPressureLevel} /80 Hmmg`);
  
    axios.post("http://localhost:8081/api/add-pressure-level", { username, date: currentDate, pressureLevelValue })
      .then(() => {
        // After successfully updating, fetch the latest value
        fetchLatestPressureLevel();
      })
      .catch((error) => {
        console.error("Error during pressure level addition:", error);
        alert("Error during pressure level addition");
      });
  
    closePopup1();
  };

  useEffect(() => {
    // Fetch the latest sugar level value when the component mounts
    fetchLatestPressureLevel();
  }, []); // Empty dependency array ensures it only runs once when the component mounts

  const fetchLatestPressureLevel = () => {
    axios.get("http://localhost:8081/api/latest-pressure-level", { params: { username } })
      .then((response) => {
        const latestPressureLevel = response.data.level; // Adjust the property name based on your API response
        setCurrentPressureLevel(`Pressure Level: ${latestPressureLevel} mg/dL`);
      })
      .catch((error) => {
        console.error("Error fetching latest pressure level:", error);
        setCurrentPressureLevel('Error fetching latest pressure level');
      });
  };



    return (

        <section>
        
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
          </section>
          
    

    )
}

export default PressureLevel;