import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const register = () => {
    axios.post("http://localhost:5000/auth/register", user)
      .then(() => alert("Registered Successfully!"))
      .catch(() => alert("Registration Failed"));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Register</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button className="btn btn-success w-100" onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
}
