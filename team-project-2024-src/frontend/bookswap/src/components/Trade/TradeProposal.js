import React, { useState, useEffect } from "react";
// import "./TradeProposal.css";

const TradeProposal = ({ userBooks, onConfirm, onCancel }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    if (userBooks.length > 0) {
      setSelectedBook(userBooks[0].id);
    }
  }, [userBooks]);

  const handleBookSelect = (bookId) => {
    setSelectedBook(bookId);
  };

  const handleConfirm = () => {
    const book = userBooks.find((book) => book.id === selectedBook);
    onConfirm(book);
  };

  if (!userBooks || userBooks.length === 0) {
    return <p>Brak książek do wymiany.</p>;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onCancel}>
          X
        </button>
        <div className="modal-header">
          <h2>Wybierz swoją książkę do wymiany</h2>
        </div>
        <div className="modal-body">
          {userBooks.map((book) => (
            <div
              key={book.id}
              className="book-item"
              onClick={() => handleBookSelect(book.id)}
            >
              <img src={book.cover} alt={book.title} className="book-cover" />
              <p>{book.title}</p>
              <input
                type="radio"
                name="selectedBook"
                checked={selectedBook === book.id}
                onChange={() => handleBookSelect(book.id)}
              />
            </div>
          ))}
        </div>
        <div className="modal-footer">
          <button onClick={handleConfirm}>Zaproponuj tę książkę</button>
        </div>
      </div>
    </div>
  );
};

export default TradeProposal;
