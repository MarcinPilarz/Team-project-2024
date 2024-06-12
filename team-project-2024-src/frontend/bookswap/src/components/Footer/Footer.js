import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../Footer/Footer.css"; // Importuj plik CSS do ostylowania footera

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-links">
          <a href="#about">O nas</a>
          <a href="#offer">Oferta</a>
          <a href="#contact">Kontakt</a>
          <a href="#privacy">Polityka prywatności</a>
        </div>
        <div className="footer-logo">
          <p>BookSwap</p>
        </div>
        <div className="social-media">
          <span>Obserwuj nas:</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon-fontawesome" icon={faFacebook} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              id="instagram-icon"
              className="icon-fontawesome"
              icon={faInstagram}
            />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 BookSwap. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
