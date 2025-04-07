import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getFirestore, collection, getDocs } from "firebase/firestore";  // Modular SDK imports
import { getUserData, saveListFromImportedData, auth } from "../../firebase"; // Adjust the import

const ImportListModal = ({ onClose, onImportSuccess }) => {
  const [availableLists, setAvailableLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAllowedLists, setUserAllowedLists] = useState([]);

  const db = getFirestore(); // Get Firestore instance

  // Fetch available lists and user's allowed lists from Firestore
  useEffect(() => {
    const fetchAvailableLists = async () => {
      try {
        const user = auth.currentUser;
        if (!user) throw new Error("No user signed in");

        // Fetch user data to get the allowed list codes
        const userData = await getUserData(user.uid);
        if (userData) {
          setUserAllowedLists(userData.allowedLists || []); // allowedLists now contain listCodes
          console.log("User Allowed Lists: ", userData.allowedLists); // Log the allowed lists
        }

        // Fetch available lists from Firestore
        const listsSnapshot = await getDocs(collection(db, "lists"));  // Using modular SDK
        const listsData = listsSnapshot.docs.map(doc => ({
          listCode: doc.id,        // Assuming each document's ID is the listCode
          listName: doc.data().name, // Assuming 'name' field is the name of the list
        }));

        setAvailableLists(listsData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching available lists: " + error.message);
        setLoading(false);
      }
    };

    fetchAvailableLists();
  }, [db]);

  // Handle import action when the user clicks 'Import'
  const handleImport = async (listData) => {
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to import lists.");
      return;
    }

    // Ensure listData contains the required fields
    const { listCode, listType, items, listName } = listData;

    // Import the list
    try {
      const success = await saveListFromImportedData(user, { listCode, listType, items, listName });
  
      if (success) {
        onImportSuccess();  // Trigger any action on successful import (e.g., refresh)
        onClose();  // Close the modal after successful import
      } else {
        alert("Error importing the list.");
      }
    } catch (error) {
      alert("Error importing the list: " + error.message);
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Import a List</h2>
        {loading && <p>Loading available lists...</p>}
        {error && <p>{error}</p>}
        <ListContainer>
          {availableLists.map((list) => (
            <ListItem key={list.listCode}>
              <span>{list.listName}</span>
              <Button
                onClick={() => handleImport(list)}
                disabled={!userAllowedLists.includes(list.listCode)} // Disable button if listCode is not allowed
              >
                Import
              </Button>
            </ListItem>
          ))}
        </ListContainer>
        <ButtonsContainer>
          <Button onClick={onClose}>Cancel</Button>
        </ButtonsContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ImportListModal;

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ListContainer = styled.div`
  margin-bottom: 20px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
