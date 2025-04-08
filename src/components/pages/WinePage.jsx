import React, { useState, useEffect } from "react";
import { firestore, auth } from "../../firebase"; // Firebase imports
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import WineCardDisplay from "../lists/wines/WineCardDisplay"; // Assuming this component is for displaying each wine list
import styled from 'styled-components';

const WinePage = () => {
  const [wineLists, setWineLists] = useState([]);  // State for wine lists
  const [userData, setUserData] = useState(null);   // State for user data
  const [error, setError] = useState(null);         // State for errors

  // Effect for authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is authenticated, fetch the user data
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
        // User is not authenticated
        setError("User not authenticated.");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Effect for fetching wine lists
  useEffect(() => {
    if (!userData) return;

    const fetchWineLists = async () => {
      try {
        const wineListData = [];

        // Loop through the lists the user is allowed to see
        for (const allowedList of userData.allowedLists) {
          const listCode = typeof allowedList === "string" ? allowedList : allowedList.listCode;

          if (!listCode) {
            console.error("Invalid listCode:", allowedList);
            continue;
          }

          // Fetch wines from the list
          const wineRef = collection(firestore, `lists/${listCode}/types`);
          const wineSnapshot = await getDocs(wineRef);

          wineSnapshot.forEach((wineDoc) => {
            const wineData = wineDoc.data();
            const typeId = wineDoc.id; // The document ID

            // Check if the wine list is opened
            const isOpened = userData.openedLists.includes(typeId) || 
                             userData.openedLists.some(opened => opened.typeId === typeId);
            
            if (!isOpened) {
              return; // Skip this wine list if it's not opened
            }

            // Add to wine lists if it's a valid wine type
            if (wineData.listType === "wine") {
              wineListData.push({
                listName: wineData.listName,
                listCode: listCode,
                typeId: typeId,
                items: wineData.items || [],
              });
            }
          });
        }

        setWineLists(wineListData);
      } catch (error) {
        console.error("Error fetching wine lists:", error);
        setError("Error fetching wine lists.");
      }
    };

    fetchWineLists();
  }, [userData]);

  // Handle the removal of a wine list
  const handleRemove = async (listCode, typeId) => {
    try {
      if (!userData) {
        throw new Error("User not authenticated.");
      }

      // Remove the typeId from the openedLists array
      const updatedOpenedLists = userData.openedLists.filter(opened => opened !== typeId);

      // Update Firestore with the new list of opened lists
      const userRef = doc(firestore, "users", userData.uid);
      await updateDoc(userRef, {
        openedLists: updatedOpenedLists,
      });

      // Update local state for immediate UI feedback
      setUserData(prevUserData => ({
        ...prevUserData,
        openedLists: updatedOpenedLists
      }));

      // Update wine lists in local state
      setWineLists(prevLists => prevLists.filter(list => list.typeId !== typeId));

      alert("Wine list removed successfully!");
    } catch (error) {
      console.error("Error removing list:", error);
      setError("Error removing the wine list.");
    }
  };

  const allWines = [
    ...wineLists.flatMap((list) => list.items || []),
  ];

  return (
    <div>
      {error && <p>{error}</p>}
      {wineLists.length === 0 && <ImportAList>Import a list to get started</ImportAList>}

      {/* Render the wine lists header */}{/* Display all beers */}
      <WineCardDisplay mainTitle="All Wines" recipes={allWines} />

      {/* Render the wine lists */}
      {wineLists.map((list) => (
        <div key={list.typeId}>
          <WineCardDisplay
            mainTitle={list.listName}
            recipes={list.items}
          />
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

export default WinePage;

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