import React, { useState } from "react";
import "./DemoPage.css";
import NavBare from "../Components/NavBare";
import axios from "axios";

function DemoPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Location, setLocation] = useState("");
  const [message, setmessage] = useState("");
  const [careType, setCareType] = useState("Senior Group Living");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/api/signup", { firstName,lastName, careType, email, phone, Location,message   }) 
      .then((res) => {
        if (res.data === "success") {
          alert("you have added successfully");
        } else {
          alert("No record exists");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("An error occurred during login");
      });
  };

  return (
    <div className="App">
      <NavBare></NavBare>
      <div className="div1">
      <header>
        <h1>Bhala Maak</h1>
        <h2>The Single Pane of Glass to Manage Your Community</h2>
      </header>
      <p>BhalaMaak is a leading digital health company purpose-built
        to meet the demands of senior living. Peer-reviewed and published
        studies show that BhalaMaak reduces hospitalizations in senior
        living communities by 39%, falls by 69%, improves staff response
        times by 37%, and increases the length of stay by 67%.
        BhalaMaak consists of an award-winning smart wearable- Tempo™,
        artificial intelligence, machine learning, and advanced kinematics
        algorithms to learn each resident’s daily activity and behavior patterns. 
        When there is a deviation from a resident’s “normal,” the system alerts staff 
        on a wide range of potential health concerns.</p>
      </div>
      <div className="div2">
        
        <div className="submit_dev">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <select
            name="care_type"
            value={careType}
            onChange={(e) => setCareType(e.target.value)}
          >
            <option value="Senior Group Living">Monitor, Supervisor </option>
            <option value="Assisted Living">Monitored</option>
            
          </select>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Where are you located?"
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Why are you interested in BHALAMAAK?"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        </div>
        
      </div>
    </div>
  );
}

export default DemoPage;
