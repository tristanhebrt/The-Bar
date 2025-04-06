import React, { useState, useEffect } from "react";
import CocktailCardDisplay from "../lists/cocktails/CocktailCardDisplay";
import { CLASSIC_COCKTAILS } from "../lists/cocktails/classicCocktails";
import { MODERN_COCKTAILS } from "../lists/cocktails/modernCocktails";
import { ALORA_COCKTAILS } from "../lists/cocktails/aloraCocktails";
import { RANDOM_COCKTAILS } from "../lists/cocktails/randomCocktails";
import DeleteList from "../utils/DeleteList";

// Import Firestore instance and functions for the modular API
import { firestore, deleteCocktailList } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const CocktailPage = () => {
  const [importedCocktails, setImportedCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Real-time listener for cocktailLists collection
  useEffect(() => {
    const colRef = collection(firestore, "cocktailLists");
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const cocktailsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImportedCocktails(cocktailsList);
        setLoading(false);
      },
      (err) => {
        setError("Error fetching lists");
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // Handle deleting a cocktail list
  const handleDelete = async (listId) => {
    try {
      await deleteCocktailList(listId); // Delete the cocktail list from Firebase
      setImportedCocktails((prevCocktails) =>
        prevCocktails.filter((list) => list.id !== listId)
      );
    } catch (err) {
      console.error("Error deleting cocktail list:", err);
    }
  };

  const allCocktails = [
    ...RANDOM_COCKTAILS,
    ...CLASSIC_COCKTAILS,
    ...MODERN_COCKTAILS,
    ...ALORA_COCKTAILS.items,
    ...importedCocktails.flatMap((list) => list.items || [])
  ];

  return (
    <>
      {loading && <p>Loading cocktails...</p>}
      {error && <p>{error}</p>}

      {/* Render all cocktails from static lists and imported lists */}
      <CocktailCardDisplay mainTitle="All Cocktails" recipes={allCocktails} />

      {/* Render imported cocktails if they exist */}
      {importedCocktails.length > 0 &&
        importedCocktails.map((list) => (
          <div key={list.id} style={{ position: "relative" }}>
            <CocktailCardDisplay 
              mainTitle={list.listName} 
              recipes={list.items} 
            />
            {/* Delete button for each imported list */}
            <DeleteList 
              listId={list.id}
              onDelete={() => handleDelete(list.id)}
            />
          </div>
        ))}

      {/* Render static cocktail lists */}
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
