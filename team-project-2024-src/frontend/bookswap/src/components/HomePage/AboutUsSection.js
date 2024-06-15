import React from "react";
import "../HomePage/AboutUsSection.css";
const AboutUsSection = () => {
  return (
    <section className="aboutus">
      <div className="h2-aboutus">
        <h2>O nas</h2>
      </div>
      <div className="about">
        <p>
          {" "}
          BookSwap to innowacyjna platforma internetowa, która umożliwia
          entuzjastom czytania z całego świata łatwą wymianę książek.
          Niezależnie od tego, czy chcesz podzielić się ulubionymi tytułami,
          odkryć nowe pozycje, czy po prostu odświeżyć swoją bibliotekę,
          BookSwap jest idealnym miejscem dla Ciebie.
          <br></br>
          <br></br>
          <b>Jak to działa:</b>
          <ul>
            <br></br>
            <li>
              <b>Rejestracja</b>: Załóż darmowe konto na BookSwap i stwórz swój
              profil czytelnika.
            </li>
            <br></br>
            <li>
              <b> Dodawanie książek:</b> Dodaj książki, które chcesz wymienić,
              do swojej wirtualnej półki. Możesz także przeglądać półki innych
              użytkowników w poszukiwaniu interesujących tytułów.
            </li>
            <br></br>
            <li>
              <b> Nawiązywanie kontaktów:</b> Skontaktuj się z innymi
              użytkownikami i ustalcie warunki wymiany. Możecie wymienić się
              adresami do wysyłki lub spotkać się osobiście.
            </li>
            <br></br>
            <li>
              <b>Wymiana:</b> Wymień książki i ciesz się nowymi lekturami! Nie
              zapomnij zostawić oceny i recenzji dla swojego partnera wymiany.
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
