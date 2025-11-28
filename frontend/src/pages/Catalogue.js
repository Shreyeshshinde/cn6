import React from "react";
import "./Catalogue.css";

const books = [
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { title: "Wings of Fire", author: "APJ Abdul Kalam" }
];

export default function Catalogue() {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">📖 Book Catalogue</h2>

      <div className="row justify-content-center">
        {books.map((book, index) => (
          <div className="col-md-3" key={index}>
            <div className="card book-card shadow p-4 mb-4">
              <div className="card-body text-center">
                <h4 className="fw-bold">{book.title}</h4>
                <p className="text-muted mb-3">by {book.author}</p>
                <button className="btn btn-primary w-100 mt-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
