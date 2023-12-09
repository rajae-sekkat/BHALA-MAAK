import React, { useState } from "react";
import "./SignupPage.css";
import NavBare from "../Components/NavBare";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [personId, setPersonId] = useState("");

  const handleSignup = () => {
    // Add your signup logic here
    console.log("Signing up:", { username, email, password, personId });
  };

  return (
    <div>
        <NavBare></NavBare>
    <div className="SignupFrame">
      <h2>Sign Up Page</h2>

      <form>

        <label className="label-group">
          <span>Username:</span>
          <span>Email:</span>
        </label>
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <label className="label-group">
          <span>Password:</span>
          <span>Person ID:</span>
        </label>
        <div className="input-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
          />
        </div>
        <br />
        <br />
        <button type="button" className="SignupButton" onClick={handleSignup}>
          Sign Up
        </button>
        <a href="/login" className="toLogin">
            You  have already an acount? Login.
        </a>
      </form>
    </div>
    </div>
  );
}

export default SignupPage;
