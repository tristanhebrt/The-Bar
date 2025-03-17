import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/pages/constants/Header';
import Footer from './components/pages/constants/Footer';
import Navbar from "./components/pages/constants/Navbar";
import CocktailPage from "./components/pages/CocktailPage";
import WinePage from "./components/pages/WinePage";
import BeerPage from "./components/pages/BeerPage";
import ChecklistPage from "./components/pages/ChecklistPage";

const App = () => {
  return (
      <Router>
          <Header />
          <Navbar />
          <Routes>
              <Route path="/" element={<CocktailPage />} />
              <Route path="/wines" element={<WinePage />} />
              <Route path="/beers" element={<BeerPage />} />
              <Route path="/checklist" element={<ChecklistPage />} />
          </Routes>
          <Footer />
      </Router>
  );
};

export default App
