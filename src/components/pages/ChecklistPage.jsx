import React, { useState, useEffect } from "react";
import Checklist from "../lists/prep/Checklist";
import { PREP_STEPS } from "../lists/prep/prepGuide";
import { CLOSE_STEPS } from "../lists/prep/closeGuide";
import styled from 'styled-components';

// Firebase imports
import { firestore, auth } from "../../firebase";
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const ChecklistPage = () => {
  const [expandedChecklist, setExpandedChecklist] = useState(null);
  const [userData, setUserData] = useState(null); // User data
  const [checklists, setChecklists] = useState([]); // User-specific checklists
  const [error, setError] = useState(null); // Error handling
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch user data when the auth state changes
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

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Fetch checklists based on user data
  useEffect(() => {
    if (!userData || !Array.isArray(userData.allowedChecklists)) return; // Ensure allowedChecklists is an array

    const fetchChecklists = async () => {
      try {
        const checklistData = [];

        // Fetch checklists user has access to
        for (const allowedList of userData.allowedChecklists) {
          const listCode = allowedList.listCode;

          if (!listCode) continue;

          const checklistRef = collection(firestore, `checklists/${listCode}/steps`);
          const checklistSnapshot = await getDocs(checklistRef);

          checklistSnapshot.forEach((checklistDoc) => {
            const checklistData = checklistDoc.data();
            const typeId = checklistDoc.id;

            const isOpened = userData.openedChecklists.includes(typeId) ||
                             userData.openedChecklists.some(opened => opened.typeId === typeId);

            if (!isOpened) {
              return; // Skip if not opened
            }

            checklistData.push({
              listName: checklistData.listName,
              listCode: listCode,
              typeId: typeId,
              items: checklistData.items || [],
            });
          });
        }

        setChecklists(checklistData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching checklists:", err);
        setError("Error fetching checklists.");
      }
    };

    fetchChecklists();
  }, [userData]);

  // Handle checklist removal
  const handleRemove = async (listCode, typeId) => {
    try {
      if (!userData) {
        throw new Error("User not authenticated.");
      }

      // Remove from openedChecklists
      const updatedOpenedChecklists = userData.openedChecklists.filter(opened => opened !== typeId);

      // Update Firestore
      const userRef = doc(firestore, "users", userData.uid);
      await updateDoc(userRef, {
        openedChecklists: updatedOpenedChecklists,
      });

      // Update local state for UI feedback
      setUserData(prevUserData => ({
        ...prevUserData,
        openedChecklists: updatedOpenedChecklists,
      }));

      // Remove from local checklists state
      setChecklists(prevLists => prevLists.filter(list => list.typeId !== typeId));

      alert("Checklist removed successfully!");
    } catch (error) {
      console.error("Error removing checklist:", error);
      setError("Error removing checklist.");
    }
  };

  // Render the checklist component with title and data
  const renderChecklist = (dataList, checklistTitle, typeId) => (
    <Checklist
      key={checklistTitle}
      dataList={dataList}
      checklistTitle={checklistTitle}
      isExpanded={expandedChecklist === checklistTitle}
      setIsExpanded={setExpandedChecklist}
    />
  );

  return (
    <div>
      {loading && <ImportAList>Import a checklist to get started</ImportAList>}
      {error && <p>{error}</p>}

      {/* Render user-specific checklists */}
      {checklists.length > 0 && checklists.map((list) => (
        <div key={list.typeId}>
          {renderChecklist(list.items, list.listName, list.typeId)}
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

export default ChecklistPage;

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