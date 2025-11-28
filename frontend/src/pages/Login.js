import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Make sure to create Login.css

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:5000/auth/login", { email, password })
      .then(() => alert("Login Successful"))
      .catch(() => alert("Invalid Credentials"));
  };

  return (
    <div className="login-container">
      <div className="login-card shadow-lg">
        <h2 className="text-center mb-4 fw-bold">🔐 Login</h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100 mt-2" onClick={login}>
          Login
        </button>

        <p className="mt-3 text-center">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}
