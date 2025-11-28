import React from "react";
import "./Home.css"; // Make sure to create Home.css

export default function Home() {
  return (
    <div className="home-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand fw-bold text-white" href="/">
          📚 Online Book Store
        </a>
        <div className="ms-auto">
          <a className="nav-link d-inline text-white" href="/">Home</a>
          <a className="nav-link d-inline text-white" href="/login">Login</a>
          <a className="nav-link d-inline text-white" href="/register">Register</a>
          <a className="nav-link d-inline text-white" href="/catalogue">Catalogue</a>
        </div>
      </nav>

      <div className="hero-section">
        <div className="text-content">
          <h1 className="title">Welcome to the Online Book Store</h1>
          <p className="subtitle">
            Discover thousands of books from all categories and unlock the joy of reading.
          </p>

          <button
            className="btn btn-primary btn-lg mt-3 explore-btn"
            onClick={() => (window.location.href = "/catalogue")}
          >
            Browse Books 📖
          </button>
        </div>

        <img
          className="hero-image"
          src="https://img.freepik.com/free-vector/stack-books-concept-illustration_114360-3883.jpg"
          alt="books"
        />
      </div>
    </div>
  );
}
