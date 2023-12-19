import React, { useState } from "react";
import "./DemoPage.css";
import NavBare from "../Components/NavBare";

function DemoPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [careType, setCareType] = useState("Senior Group Living");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="App">
      <NavBare></NavBare>
      <div className="div1">
      <header>
        <h1>CarePredict</h1>
        <h2>The Single Pane of Glass to Manage Your Community</h2>
      </header>
      <p>Empowering Better Senior Living</p>
      </div>

      <div className="div2">
        <h3>Sign up to learn more</h3>
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
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company/Senior Living Community"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <select
            name="care_type"
            value={careType}
            onChange={(e) => setCareType(e.target.value)}
          >
            <option value="Senior Group Living">Senior Group Living</option>
            <option value="Assisted Living">Assisted Living</option>
            <option value="Memory Care">Memory Care</option>
            <option value="CCRC">CCRC</option>
            <option value="Independent Living">Independent Living</option>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default DemoPage;
