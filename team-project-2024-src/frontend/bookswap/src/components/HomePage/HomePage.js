import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "../HomePage/HomePage.css";
import AboutUsSection from "./AboutUsSection";
import BestMentioning from "./BestMentioning";
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

          <BestMentioning />
        </article>
      </main>
      <Footer />
    </div>
    /* <Footer /> */
  );
};

export default HomePage;
