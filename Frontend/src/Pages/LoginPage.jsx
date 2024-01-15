import React from "react";
import { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import NavBare from "../Components/NavBare";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8081/api/login", { username, password }) // Modification de cette ligne
      .then((res) => {
        if (res.data === "success") {
          navigate("/VitalParameterPage");
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
    <div className="general">
      <NavBare></NavBare>
      <div className="Login-Frame" >
      <h1 className="tit">Login</h1>
        <form method="post" onSubmit={handleLogin}> 
          <label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button
            className="LoginButton"
            type="button"
            onClick={handleLogin}
            color="#f68b08"

          >
            Login
          </button>
          <h4 className="toSignUp">
           How it work?
          <a href="/Demo" >
             Get a Demo.
          </a>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
