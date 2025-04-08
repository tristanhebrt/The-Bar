import React, { useState, useEffect } from "react";
import CocktailCardDisplay from "../lists/cocktails/CocktailCardDisplay";
import { CLASSIC_COCKTAILS } from "../lists/cocktails/classicCocktails";
import { MODERN_COCKTAILS } from "../lists/cocktails/modernCocktails";
import { ALORA_COCKTAILS } from "../lists/cocktails/aloraCocktails";
import { RANDOM_COCKTAILS } from "../lists/cocktails/randomCocktails";

// Firebase imports
import { firestore, auth } from "../../firebase";
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import styled from 'styled-components';

const CocktailPage = () => {
  const [cocktailLists, setCocktailLists] = useState([]);  // State for cocktail lists
  const [userData, setUserData] = useState(null);           // State for user data
  const [error, setError] = useState(null);                 // State for errors

  // Effect for authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(firestore, "users", user.uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            setError("User data not found.");
          }
        } catch (err) {
          setError("Error fetching user data: " + err.message);
        }
      } else {
        setError("User not authenticated.");
      }
    });

    return () => unsubscribe(); // Cleanup the auth listener
  }, []);

  // Effect to fetch cocktail lists based on user data
  useEffect(() => {
    if (!userData) return;

    const fetchCocktailLists = async () => {
      try {
        const cocktailListData = [];

        for (const allowedList of userData.allowedLists) {
          const listCode = typeof allowedList === "string" ? allowedList : allowedList.listCode;

          if (!listCode) {
            console.error("Invalid listCode:", allowedList);
            continue;
          }

          const cocktailRef = collection(firestore, `lists/${listCode}/types`);
          const cocktailSnapshot = await getDocs(cocktailRef);

          cocktailSnapshot.forEach((cocktailDoc) => {
            const cocktailData = cocktailDoc.data();
            const typeId = cocktailDoc.id;

            const isOpened = userData.openedLists.includes(typeId) ||
                             userData.openedLists.some(opened => opened.typeId === typeId);
            
            if (!isOpened) {
              return; // Skip if the list is not opened
            }

            if (cocktailData.listType === "cocktail") {
              cocktailListData.push({
                listName: cocktailData.listName,
                listCode: listCode,
                typeId: typeId,
                items: cocktailData.items || [],
              });
            }
          });
        }

        setCocktailLists(cocktailListData);
      } catch (error) {
        console.error("Error fetching cocktail lists:", error);
        setError("Error fetching cocktail lists.");
      }
    };

    fetchCocktailLists();
  }, [userData]);

  // Handle the removal of a cocktail list
  const handleRemove = async (listCode, typeId) => {
    try {
      if (!userData) {
        throw new Error("User not authenticated.");
      }

      // Remove the typeId from openedLists
      const updatedOpenedLists = userData.openedLists.filter(opened => opened !== typeId);

      // Update Firestore
      const userRef = doc(firestore, "users", userData.uid);
      await updateDoc(userRef, {
        openedLists: updatedOpenedLists,
      });

      // Update local state for UI feedback
      setUserData(prevUserData => ({
        ...prevUserData,
        openedLists: updatedOpenedLists
      }));

      // Remove from the local cocktail lists
      setCocktailLists(prevLists => prevLists.filter(list => list.typeId !== typeId));

      alert("Cocktail list removed successfully!");
    } catch (error) {
      console.error("Error removing list:", error);
      setError("Error removing the cocktail list.");
    }
  };

  // Combine static and imported cocktail lists
  const allCocktails = [
    ...cocktailLists.flatMap((list) => list.items || []),
  ];

  return (
    <div>
      {error && <p>{error}</p>}
      {cocktailLists.length === 0 && <ImportAList>Import a list to get started</ImportAList>}

      {/* Display all cocktails */}
      <CocktailCardDisplay mainTitle="All Cocktails" recipes={allCocktails} />

      {/* Render imported cocktail lists */}
      {cocktailLists.length > 0 &&
        cocktailLists.map((list) => (
          <div key={list.typeId}>
            <CocktailCardDisplay mainTitle={list.listName} recipes={list.items || []} />
            <RemoveButtonContainer>
            <RemoveButton
              onClick={() => handleRemove(list.listCode, list.typeId)}
            >
              Remove
            </RemoveButton>
          </RemoveButtonContainer>
          </div>
        ))}
    </div>
  );
};

export default CocktailPage;

// Styled Button Component
const RemoveButton = styled.button`
  padding: 5px 10px;
  width: auto;
  font-family: var(--text-font);
  font-size: 1.2rem;
  background: var(--dark-red);
  color: var(--white);
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
      background: var(--highlight3);
  }

  &:active {
      transform: scale(0.95);
  }
`;

const RemoveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const ImportAList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-red);
  font-size: 1.5rem;
  font-family: var(--text-font);
  font-weight: bold;
  margin-top: 2rem;
`;