import React, { useState, useEffect } from "react";
import { firestore, auth } from "../../firebase"; // Firebase imports
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import FoodCardDisplay from "../lists/foods/FoodCardDisplay"; // Assuming this component is for displaying each food list
import styled from 'styled-components';

// Import static food lists
import { 
  ALORA_APPETIZERS, 
  ALORA_SUSHIS, 
  ALORA_SALADS, 
  ALORA_SHARING_BOARDS, 
  ALORA_MAINS 
} from "../lists/foods/aloraFoods";

const FoodPage = () => {
  const [foodLists, setFoodLists] = useState([]);  // State for food lists
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

  // Effect for fetching food lists
  useEffect(() => {
    if (!userData) return;

    const fetchFoodLists = async () => {
      try {
        const foodListData = [];

        // Loop through the lists the user is allowed to see
        for (const allowedList of userData.allowedLists) {
          const listCode = typeof allowedList === "string" ? allowedList : allowedList.listCode;

          if (!listCode) {
            console.error("Invalid listCode:", allowedList);
            continue;
          }

          // Fetch foods from the list
          const foodRef = collection(firestore, `lists/${listCode}/types`);
          const foodSnapshot = await getDocs(foodRef);

          foodSnapshot.forEach((foodDoc) => {
            const foodData = foodDoc.data();
            const typeId = foodDoc.id; // The document ID

            // Check if the food list is opened
            const isOpened = userData.openedLists.includes(typeId) || 
                             userData.openedLists.some(opened => opened.typeId === typeId);
            
            if (!isOpened) {
              return; // Skip this food list if it's not opened
            }

            // Add to food lists if it's a valid food type
            if (foodData.listType === "food") {
              foodListData.push({
                listName: foodData.listName,
                listCode: listCode,
                typeId: typeId,
                items: foodData.items || [],
              });
            }
          });
        }

        setFoodLists(foodListData);
      } catch (error) {
        console.error("Error fetching food lists:", error);
        setError("Error fetching food lists.");
      }
    };

    fetchFoodLists();
  }, [userData]);

  // Handle the removal of a food list
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

      // Update food lists in local state
      setFoodLists(prevLists => prevLists.filter(list => list.typeId !== typeId));

      alert("Food list removed successfully!");
    } catch (error) {
      console.error("Error removing list:", error);
      setError("Error removing the food list.");
    }
  };

  // Combine static and imported food lists
  const allFoods = [
    ...foodLists.flatMap((list) => list.items || []),
  ];

  return (
    <div>
      {error && <p>{error}</p>}
      {foodLists.length === 0 && <ImportAList>Import a list to get started</ImportAList>}
      
      {/* Display all foods */}
      <FoodCardDisplay mainTitle="All Dishes" foodList={allFoods} />

      {/* Display Imported Food Lists */}
      {foodLists.length > 0 &&
        foodLists.map((list) => (
          <div key={list.typeId}>
            <FoodCardDisplay mainTitle={list.listName} foodList={list.items || []} />
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

export default FoodPage;

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