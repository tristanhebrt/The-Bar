import React, { useState } from "react";
import styled from "styled-components";
import { getUserData, updateUserPermissions } from "../../firebase";

const AdminPermissionManagerModal = ({ isOpen, onClose }) => {
  const [userId, setUserId] = useState("");
  const [listCode, setListCode] = useState("");
  const [currentLists, setCurrentLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUserPermissions = async () => {
    try {
      setLoading(true);
      setError(null);
      const userData = await getUserData(userId);
      setCurrentLists(userData?.allowedLists || []);
    } catch (error) {
      setError("Error loading permissions: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPermission = async () => {
    try {
      if (!userId || !listCode) {
        throw new Error("User ID and List Code are required");
      }
      
      const newLists = [...new Set([...currentLists, listCode])];
      await updateUserPermissions(userId, newLists);
      await loadUserPermissions();
      setListCode(""); // Clear input after success
    } catch (error) {
      setError("Error updating permissions: " + error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Manage User Permissions</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ContentContainer>
          <InputGroup>
            <Label>User ID:</Label>
            <Input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter user ID"
            />
            <ActionButton onClick={loadUserPermissions} disabled={!userId}>
              {loading ? "Loading..." : "Load Permissions"}
            </ActionButton>
          </InputGroup>

          <InputGroup>
            <Label>List Code:</Label>
            <Input
              type="text"
              value={listCode}
              onChange={(e) => setListCode(e.target.value)}
              placeholder="Enter list code"
            />
            <ActionButton onClick={handleAddPermission} disabled={!listCode}>
              Add Permission
            </ActionButton>
          </InputGroup>

          {error && <ErrorText>{error}</ErrorText>}

          <PermissionsList>
            <h3>Current Permissions:</h3>
            {currentLists.length > 0 ? (
              <List>
                {currentLists.map((code) => (
                  <ListItem key={code}>{code}</ListItem>
                ))}
              </List>
            ) : (
              <EmptyState>No permissions assigned yet</EmptyState>
            )}
          </PermissionsList>
        </ContentContainer>
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
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 0.5rem;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const ContentContainer = styled.div`
  padding: 1.5rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${props => props.disabled ? "#cccccc" : "#007bff"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? "#cccccc" : "#0056b3"};
  }
`;

const PermissionsList = styled.div`
  margin-top: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #eee;
  border-radius: 4px;
`;

const ListItem = styled.li`
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
  font-family: monospace;

  &:last-child {
    border-bottom: none;
  }
`;

const EmptyState = styled.div`
  padding: 1rem;
  text-align: center;
  color: #666;
  border: 1px dashed #ddd;
  border-radius: 4px;
`;

const ErrorText = styled.div`
  color: #dc3545;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #f8d7da;
  border-radius: 4px;
`;

export default AdminPermissionManagerModal;