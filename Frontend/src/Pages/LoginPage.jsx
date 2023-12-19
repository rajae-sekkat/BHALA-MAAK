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

  const handleLogin = () => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", { username, password }) // Modification de cette ligne
      .then((res) => {
        if (res.data === "success") {
          navigate("/home");
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
    <div>
      <NavBare></NavBare>
      <div className="LoginFrame">
        <h2>Page de Connexion</h2>
        <form>
          <label>
            Nom d'utilisateur:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Mot de passe:
            <input
              type="password"
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
          <a href="/Demo" className="toSignUp">
            How it work? Get a Demo.
          </a>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
