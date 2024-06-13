import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import OffersPage from "./components/Offer/OffersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offers" element={<OffersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
