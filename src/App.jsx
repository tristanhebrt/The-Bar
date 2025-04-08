import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

import Header from './components/pages/constants/Header';
import Footer from './components/pages/constants/Footer';
import Navbar from "./components/pages/constants/Navbar";
import CocktailPage from "./components/pages/CocktailPage";
import WinePage from "./components/pages/WinePage";
import BeerPage from "./components/pages/BeerPage";
import FoodPage from "./components/pages/FoodPage";
import ChecklistPage from "./components/pages/ChecklistPage";

import Login from "./components/auth/Login";
import UserProfile from "./components/auth/UserProfile";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Router>
      {/* Pass user as a prop to Header */}
      <Header user={user} />
      <Navbar />
      {user ? <UserProfile /> : <Login />}
      <Routes>
        <Route path="/" element={<CocktailPage />} />
        <Route path="/wines" element={<WinePage />} />
        <Route path="/beers" element={<BeerPage />} />
        <Route path="/foods" element={<FoodPage />} />
        <Route path="/checklist" element={<ChecklistPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
