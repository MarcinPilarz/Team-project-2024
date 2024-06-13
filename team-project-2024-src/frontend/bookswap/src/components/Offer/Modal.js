import React from "react";
import "./Modal.css"; // Załącz plik stylów dla modalu

const Modal = ({ book, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Funkcja do zamykania modalu, gdy kliknięto poza jego zawartością
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-header">
          <h3>
            {book.title} - {book.author}
          </h3>
          <h4>Wymieniający: {book.user}</h4>
        </div>
        <div className="modal-body">
          <img src={book.cover} alt={book.title} className="modal-book-cover" />
          <p>{book.description}</p>
          <p>
            Opinia o użytkowniku: ⭐ {book.userRating} ({book.reviewsCount}{" "}
            opinii)
          </p>
        </div>
        <div className="modal-footer">
          <button onClick={() => alert("Rozpoczynanie wymiany...")}>
            Zaproponuj wymianę
          </button>
          <button onClick={() => alert("Rozpoczynanie rozmowy...")}>
            Rozmowa z użytkownikiem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
