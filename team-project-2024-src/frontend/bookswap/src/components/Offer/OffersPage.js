import React, { useState } from "react";
import "./OffersPage.css"; // Styl dla ofert
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Modal from "./Modal";
import { mockBooks } from "../../data/mockBooks";

const OffersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = mockBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Navigation />
      <main>
        <section className="offers-container">
          <input
            type="text"
            placeholder="Szukaj po tytule, kategorii, autorze..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <div className="books-list">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="book-item"
                onClick={() => handleOpenModal(book)}
              >
                <img src={book.cover} alt={book.title} className="book-cover" />
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <h4>Wymieniający: {book.user}</h4>
                  <button onClick={() => handleOpenModal(book)}>
                    Więcej informacji
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      {isModalOpen && (
        <Modal
          book={selectedBook}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          userBooks={selectedBook} // Przekazywanie wybranej książki jako "userBooks"
        />
      )}
    </div>
  );
};

export default OffersPage;
