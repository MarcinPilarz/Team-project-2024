import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import OffersPage from "./components/Offer/OffersPage";
import MyProfile from "./components/auth/profile user/MyProfile";
import TradeProposal from "./components/Trade/TradeProposal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/trade" element={<TradeProposal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
