import React, { useState } from "react";
import "./OffersPage.css"; // Styl dla ofert
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Modal from "./Modal";

const mockBooks = [
  {
    id: 1,
    title: "Przygody Sherlocka Holmesa",
    author: "Arthur Conan Doyle",
    category: "Kryminał",
    description:
      "Opis przygód Sherlocka Holmesa, detektywa działającego w Londynie, który rozwiązuje najtrudniejsze zagadki kryminalne.",
    user: "JanKowalski92",
    userRating: 4.5,
    reviewsCount: 150,
    cover:
      "https://storage.googleapis.com/springbootphoto/springbootphoto/logoBookSwap.svg",
  },
  {
    id: 2,
    title: "Wiedźmin: Ostatnie życzenie",
    author: "Andrzej Sapkowski",
    category: "Fantasy",
    description:
      "Zbiór opowiadań o Geralcie z Rivii, wiedźminie polującym na potwory. Książka, która zainspirowała popularną serię gier.",
    user: "AnnaNowak",
    userRating: 4.7,
    reviewsCount: 120,
    cover: "https://example.com/wiedzmin.jpg",
  },
];

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
    setSelectedBook(null);
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
              <div key={book.id} className="book-item">
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
        />
      )}
    </div>
  );
};

export default OffersPage;
