import React, { useState, useEffect } from "react";
import CocktailCardDisplay from "../lists/cocktails/CocktailCardDisplay";
import { CLASSIC_COCKTAILS } from "../lists/cocktails/classicCocktails";
import { MODERN_COCKTAILS } from "../lists/cocktails/modernCocktails";
import { ALORA_COCKTAILS } from "../lists/cocktails/aloraCocktails";
import { RANDOM_COCKTAILS } from "../lists/cocktails/randomCocktails";

// Firebase imports
import { firestore } from "../../firebase";
import { collection, onSnapshot, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const CocktailPage = () => {
  const [importedCocktails, setImportedCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAllowedLists, setUserAllowedLists] = useState([]);
  const [user, setUser] = useState(null);

  // Fetch current user data
  useEffect(() => {
    const currentUser = getAuth().currentUser;
    if (currentUser) {
      setUser(currentUser);
      fetchUserAllowedLists(currentUser.uid);
    }
  }, []);

  // Fetch allowed cocktail lists for the user
  const fetchUserAllowedLists = async (userId) => {
    try {
      const userDocRef = doc(firestore, "users", userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const allowedLists = userDoc.data().allowedLists || [];
        setUserAllowedLists(allowedLists);
      }
    } catch (err) {
      setError("Error fetching user allowed lists");
      console.error(err);
    }
  };

  useEffect(() => {
    if (!user) return;

    const colRef = collection(firestore, "cocktailLists");

    // Real-time listener for cocktailLists collection
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const lists = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((list) => userAllowedLists.includes(list.id)); // Filter lists the user is allowed to see

        setImportedCocktails(lists);
        setLoading(false);
      },
      (err) => {
        setError("Error fetching cocktail lists");
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup on unmount
  }, [user, userAllowedLists]); // Re-run when user or allowed lists change

  const allCocktails = [
    ...RANDOM_COCKTAILS,
    ...CLASSIC_COCKTAILS,
    ...MODERN_COCKTAILS,
    ...ALORA_COCKTAILS.items,
    ...importedCocktails.flatMap((list) => list.items || []),
  ];

  return (
    <>
      {loading && <p>Loading cocktails...</p>}
      {error && <p>{error}</p>}

      {/* Render all cocktails */}
      <CocktailCardDisplay mainTitle="All Cocktails" recipes={allCocktails} />

      {/* Render imported cocktails if they exist */}
      {importedCocktails.length > 0 &&
        importedCocktails.map((list) => (
          <div key={list.id}>
            <CocktailCardDisplay mainTitle={list.listName} recipes={list.items || []} />
          </div>
        ))}

      {/* Render static cocktail lists */}
      <CocktailCardDisplay mainTitle="Classic Cocktails" recipes={CLASSIC_COCKTAILS} />
      <CocktailCardDisplay mainTitle="Modern Cocktails" recipes={MODERN_COCKTAILS} />
      <CocktailCardDisplay mainTitle={ALORA_COCKTAILS.listName} recipes={ALORA_COCKTAILS.items} />
    </>
  );
};

export default CocktailPage;
