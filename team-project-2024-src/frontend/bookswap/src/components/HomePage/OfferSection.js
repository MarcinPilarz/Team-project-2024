import React from "react";
import "./OfferSection.css"; // Zaimportuj styl CSS

const OfferSection = () => {
  return (
    <section className="offer-section">
      <h2>Oferujemy najlepszy wybór e-booków do wymiany!</h2>
      <p>
        W naszej platformie znajdziesz szeroką gamę e-booków z różnych dziedzin.
        Dzięki prostemu systemowi wymiany, możesz cieszyć się nieograniczonym
        dostępem do książek, które chcesz przeczytać, wymieniając swoje używane
        e-booki na nowe tytuły. Odkryj nowe światy z każdą stroną i dołącz do
        społeczności miłośników książek już dziś!
      </p>
      <button onClick={() => (window.location.href = "/offers")}>
        Zobacz oferty
      </button>
    </section>
  );
};

export default OfferSection;
