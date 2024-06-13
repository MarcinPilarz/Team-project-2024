import React, { useState, useEffect } from "react";

const MyProfile = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="profile-container">
      <h2>Moje książki</h2>
      <div className="books-list">
        {books.map((book) => (
          <div
            key={book.id}
            className="book-item"
            onClick={() => setSelectedBook(book.id)}
          >
            <img src={book.cover} alt={book.title} className="book-cover" />
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
