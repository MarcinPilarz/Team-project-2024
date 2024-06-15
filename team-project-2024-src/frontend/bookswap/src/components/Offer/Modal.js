import React, { useState } from "react";
import "./Modal.css"; // Załącz plik stylów dla modalu
import TradeProposal from "../Trade/TradeProposal";
import { userBooksMock } from "../../data/userBooksMock";
// Załóżmy, że mamy taki komponent

const Modal = ({ book, isOpen, onClose, userBooks }) => {
  const [showTradeProposal, setShowTradeProposal] = useState(false);

  // Funkcja do zamykania modalu, gdy kliknięto poza jego zawartością
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleStartTrade = () => {
    setShowTradeProposal(true);
  };

  const handleCloseTradeProposal = () => {
    setShowTradeProposal(false);
    onClose();
  };

  const handleConfirmTrade = (selectedBook) => {
    console.log("Trade confirmed:", selectedBook.title);
    setShowTradeProposal(false);
    onClose();
  };

  if (!isOpen) return null; // Przesunięte tutaj, po wszystkich wywołaniach hooków

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
          <button onClick={handleStartTrade}>Zaproponuj wymianę</button>
          <button onClick={() => alert("Rozpoczynanie rozmowy...")}>
            Rozmowa z użytkownikiem
          </button>
        </div>
        {showTradeProposal && (
          <TradeProposal
            userBooks={userBooksMock} // Upewnij się, że jest to tablica
            onConfirm={handleConfirmTrade}
            onCancel={handleCloseTradeProposal}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
