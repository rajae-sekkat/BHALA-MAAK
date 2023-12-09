import React from "react";
import { useState } from "react";
import "./LoginPage.css";
import NavBare from "../Components/NavBare";
import { useNavigate } from 'react-router-dom';

function LoginPage  ()  {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion
    // Par exemple, vérifiez les informations d'identification et redirigez si la connexion est réussie
    if (username === "utilisateur" && password === "motdepasse") {
      navigate("/home");
    } else {
      alert(
        "Échec de la connexion. Veuillez vérifier vos informations d'identification."
      );
    }
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
        <button className="LoginButton" type="button" onClick={handleLogin} color="#f68b08">
          Login
        </button>
        <a href="/Signup" className="toSignUp">
            You dont have an acount? Sign up.
        </a>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
