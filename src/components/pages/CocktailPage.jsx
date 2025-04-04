// CocktailPage.jsx
import React, { useState, useEffect } from "react";
import CocktailCardDisplay from "../lists/cocktails/CocktailCardDisplay";
import { CLASSIC_COCKTAILS } from "../lists/cocktails/classicCocktails";
import { MODERN_COCKTAILS } from "../lists/cocktails/modernCocktails";
import { ALORA_COCKTAILS } from "../lists/cocktails/aloraCocktails";
import { RANDOM_COCKTAILS } from "../lists/cocktails/randomCocktails";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const CocktailPage = () => {
  const [importedCocktails, setImportedCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchImportedCocktails = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "cocktailLists"));
      const cocktailsList = [];
      querySnapshot.forEach((doc) => {
        cocktailsList.push({ id: doc.id, ...doc.data() });
      });
      setImportedCocktails(cocktailsList);
    } catch (err) {
      setError("Error fetching lists");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImportedCocktails();
  }, []);

  // Updated allCocktails combination
  const allCocktails = [
    ...RANDOM_COCKTAILS,
    ...CLASSIC_COCKTAILS,
    ...MODERN_COCKTAILS,
    ...ALORA_COCKTAILS.items,
    ...importedCocktails.flatMap(list => list.items)
  ];

  return (
    <>
      {loading && <p>Loading cocktails...</p>}
      {error && <p>{error}</p>}

      <CocktailCardDisplay mainTitle="All Cocktails" recipes={allCocktails} />

      {/* Separate display for each imported list */}
      {importedCocktails.map((list) => (
        <CocktailCardDisplay 
          key={list.id}
          mainTitle={list.listName} 
          recipes={list.items} 
        />
      ))}

      {/* Predefined categories */}
      <CocktailCardDisplay mainTitle="Classic Cocktails" recipes={CLASSIC_COCKTAILS} />
      <CocktailCardDisplay mainTitle="Modern Cocktails" recipes={MODERN_COCKTAILS} />
      <CocktailCardDisplay 
        mainTitle={ALORA_COCKTAILS.listName} 
        recipes={ALORA_COCKTAILS.items} 
      />
    </>
  );
};

export default CocktailPage;