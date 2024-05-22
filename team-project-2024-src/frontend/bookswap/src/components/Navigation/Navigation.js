import React from "react";
//import '../styles/Navigation.css';
import "../Navigation/Navigation.css";
function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>Strona główna</li>
        <li>O nas</li>
        <li>Oferta</li>
        <li>Kontakt</li>
        <li>Zaloguj</li>
        <li>Zarejestruj</li>
      </ul>
    </nav>
  );
}

export default Navigation;
