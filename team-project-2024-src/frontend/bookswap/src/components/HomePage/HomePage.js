import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "../HomePage/HomePage.css";
import AboutUsSection from "./AboutUsSection";
const HomePage = () => {
  return (
    <div className="app">
      <Navigation />
      <header className="app-header">
        <h1>
          <span className="typewriter-text">BookSwap</span>
          <span className="cursor"></span>
        </h1>
      </header>
      <main className="app-main">
        <article>
          <AboutUsSection />
          {/* <aside>
          <p>Check out the most popular books this week!</p>
        </aside> */}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
