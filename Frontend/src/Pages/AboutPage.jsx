import React from "react";
import "./AboutPage.css";
import NavBare from "../Components/NavBare";
import Header from "../Components/Header";
import { FaMapMarker, FaHeartbeat, FaBell } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="home2">
        <NavBare></NavBare>
      <div className="div">
        <Header></Header>
      </div>

      <div className="content1">
        <h3>Welcome to BHALA MAAK - Your Companion in Care.</h3>
        <p>
          Stay connected and informed about your loved one's health and
          well-being in real-time.With our advanced
          <br /> sensor technology, monitor vital health metrics like heart
          rate, blood sugar, and blood pressure effortlessly.
          <br />
          Receive timely reminders for medication and get instant notifications,
          ensuring your loved one's safety and health
        </p>
      </div>

        <div className="all">
        <div className="features1">
          
          <div>
            <FaMapMarker className="icon" />
            <p className="text">Real-time location</p>
            <p>
              To visualize the real-time location of the person under your care,
              ensuring their safety and keeping track of their position at all
              times.
            </p>
          </div>
          <div>
            <FaHeartbeat className="icon" />
            <p className="text">Health monitoring</p>
            <p>
              Access a unified dashboard displaying key health metrics of the
              user, facilitating comprehensive monitoring.
            </p>
          </div>
          <div>
            <FaBell className="icon" />
            <p className="text"> Reminders</p>
            <p>
              Receive personalized reminders for medication intake at specified
              times.
            </p>
          </div>
        </div>

        </div>
        
      
    </div>
  );
}

export default AboutPage;
