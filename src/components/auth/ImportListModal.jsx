import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db, getUserData, auth } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { onImportSuccess } from "../utils/onImportSuccess";

const ImportListModal = ({ onClose }) => {
  const [availableLists, setAvailableLists] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAllowedLists, setUserAllowedLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) throw new Error("Authentication required");

        const userData = await getUserData(user.uid);
        const allowedListCodes = userData?.allowedLists || [];
        setUserAllowedLists(allowedListCodes);

        const lists = [];
        const listsSnapshot = await getDocs(collection(db, "lists"));
        
        for (const listDoc of listsSnapshot.docs) {
          const listCode = listDoc.id;
          const listData = listDoc.data();
          
          lists.push({
            listCode,
            listName: listData.listName || listCode,
            listType: listData.listType, // Ensure this is included in the list data
            ownerId: listData.ownerId,
            hasAccess: allowedListCodes.includes(listCode) || 
                      listData.ownerId === user.uid ||
                      userData?.isAdmin
          });
        }

        setAvailableLists(lists);
        setFilteredLists(lists);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = availableLists.filter((list) =>
      list.listCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      list.listName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredLists(filtered);
  }, [searchQuery, availableLists]);

  const handleImport = async (listCode) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Authentication required");
  
      if (!userAllowedLists.includes(listCode)) {
        throw new Error("You don't have permission to import this list");
      }
  
      const importedList = availableLists.find(list => list.listCode === listCode);
  
      if (importedList) {
        console.log("Imported List:", importedList);
  
        await onImportSuccess(importedList, user.uid); 
  
        onClose(); 
  
        // 🔄 Instead of full refresh, re-fetch the lists
        fetchData();
      } else {
        throw new Error("List not found");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  
  
  

  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Available Lists</h2>
        <SearchInput
          type="text"
          placeholder="Search by code or name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {loading && <LoadingText>Loading lists...</LoadingText>}
        {error && <ErrorText>{error}</ErrorText>}
        
        <ListContainer>
          {filteredLists.map((list) => (
            <ListItem key={list.listCode}>
              <ListInfo>
                <ListName>{list.listName}</ListName>
              </ListInfo>
              <ImportButton
                onClick={() => handleImport(list.listCode)}
                disabled={!list.hasAccess}
                title={list.hasAccess ? "" : "Contact admin for access"}
              >
                {list.hasAccess ? "📥 Import" : "🔒 Locked"}
              </ImportButton>
            </ListItem>
          ))}
        </ListContainer>

        <ButtonContainer>
          <ActionButton onClick={onClose}>Close</ActionButton>
        </ButtonContainer>
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  color: var(--highlight1);
  font-family: var(--text-font);
`;

const LoadingText = styled.p`
  color: var(--highlight3);
  text-align: center;
  margin: 2rem 0;
`;

const ErrorText = styled.p`
  color: var(--dark-red);
  padding: 1rem;
  background-color: #f8d7da;
  border-radius: 4px;
  margin: 1rem 0;
`;

const ListContainer = styled.div`
  margin: 1rem 0;
  gap: 1rem;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--light-grey);
`;

const ListInfo = styled.div`
  flex: 1;
`;

const ListName = styled.div`
  font-weight: 500;
`;

const ImportButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ disabled }) => (disabled ? "var(--highlight3)" : "var(--highlight1)")};
  color: var(--white);
  font-family: var(--text-font);
  border: none;
  
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "var(--highlight3)" : "var(--highlight2)")};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--black);
  color: var(--white);
  font-family: var(--text-font);
  border: none;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--highlight1);
  }
`;
const SearchInput = styled.input`
width: 100%;
  padding: 5px 10px;
  font-family: var(--text-font);
  font-size: 1rem;
  background: var(--black);
  border: 1px solid var(--primary);

  &:focus {
    outline: none;
    border-color: var(--highlight2);
  }
`;
