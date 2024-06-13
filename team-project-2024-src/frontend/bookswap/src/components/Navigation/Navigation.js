import React from "react";
import "../Navigation/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        {/* Elementy nawigacyjne i przyciski logowania/rejestracji są w jednym rzędzie, ale rozdzielone */}
        {/* <div className="nav-options"> */}
        <li className="nav-option">Strona główna</li>
        <li className="nav-option">O nas</li>
        <li className="nav-option">Oferta</li>
        <li className="nav-option">Kontakt</li>
        {/* </div> */}
        <div className="auth-buttons">
          {" "}
          {/* Przeniesienie przycisków na koniec listy */}
          <li className="signin-button">Zaloguj</li>
          <li className="signup-button">Zarejestruj</li>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
