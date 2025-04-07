import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db, getUserData, auth } from "../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";

const ImportListModal = ({ onClose, onImportSuccess }) => {
  const [availableLists, setAvailableLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAllowedLists, setUserAllowedLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) throw new Error("Authentication required");

        // Get fresh user permissions
        const userData = await getUserData(user.uid);
        const allowedListCodes = userData?.allowedLists || [];
        setUserAllowedLists(allowedListCodes);

        // Fetch all lists
        const lists = [];
        const listsSnapshot = await getDocs(collection(db, "lists"));
        
        for (const listDoc of listsSnapshot.docs) {
          const listCode = listDoc.id;
          const listData = listDoc.data();
          
          lists.push({
            listCode,
            listName: listData.listName || listCode,
            ownerId: listData.ownerId,
            hasAccess: allowedListCodes.includes(listCode) || 
                      listData.ownerId === user.uid ||
                      userData?.isAdmin
          });
        }

        setAvailableLists(lists);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImport = async (listCode) => {
    try {
      if (!userAllowedLists.includes(listCode)) {
        throw new Error("You don't have permission to import this list");
      }
      
      // Your import logic here
      onImportSuccess();
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Available Lists</h2>
        {loading && <LoadingText>Loading lists...</LoadingText>}
        {error && <ErrorText>{error}</ErrorText>}

        <ListContainer>
          {availableLists.map((list) => (
            <ListItem key={list.listCode}>
              <ListInfo>
                <ListName>{list.listName}</ListName>
                <ListMeta>
                  Owner: {list.ownerId?.substring(0, 8)}... • 
                  Code: {list.listCode}
                </ListMeta>
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
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
`;

const ListContainer = styled.div`
  margin: 1.5rem 0;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const ListInfo = styled.div`
  flex: 1;
`;

const ListName = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const ListMeta = styled.div`
  font-size: 0.875rem;
  color: #6c757d;
`;

const ImportButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.disabled ? "#cccccc" : "#007bff"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? "#cccccc" : "#0056b3"};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a6268;
  }
`;

const LoadingText = styled.p`
  color: #6c757d;
  text-align: center;
  margin: 2rem 0;
`;

const ErrorText = styled.p`
  color: #dc3545;
  padding: 1rem;
  background-color: #f8d7da;
  border-radius: 4px;
  margin: 1rem 0;
`;

export default ImportListModal;