import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db, updateUserPermissions } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const AdminPermissionManagerModal = ({ isOpen, onClose }) => {
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [listSearchTerm, setListSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedList, setSelectedList] = useState(null);
  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all users and lists
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch users with email validation
        const usersQuery = query(
          collection(db, "users"),
          where("email", ">=", "")
        );
        const usersSnapshot = await getDocs(usersQuery);
        const usersData = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersData);

        // Fetch lists
        const listsSnapshot = await getDocs(collection(db, "lists"));
        const listsData = listsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLists(listsData);
      } catch (error) {
        setError("Failed to load data: " + error.message);
      }
      setLoading(false);
    };

    if (isOpen) fetchData();
  }, [isOpen]);

  const handleAddPermission = async () => {
    try {
      if (!selectedUser || !selectedList) {
        throw new Error("Please select both a user and a list");
      }
  
      // Create updated allowed lists array
      const updatedLists = Array.from(
        new Set([...selectedUser.allowedLists, selectedList.id])
      );
  
      // Update permissions in Firestore
      await updateUserPermissions(selectedUser.id, updatedLists);
      
      // Update local state
      setUsers(users.map(user => 
        user.id === selectedUser.id 
          ? { ...user, allowedLists: updatedLists }
          : user
      ));
      
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Manage Permissions</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ContentContainer>


          {/* User Search Section */}
          <Section>
            <SectionTitle>Search Users by Email</SectionTitle>
            <SearchInput
              placeholder="Type to search users..."
              value={userSearchTerm}
              onChange={(e) => setUserSearchTerm(e.target.value)}
            />
            <UserList show={userSearchTerm.length > 0}>
                {users
                    .filter(user => user.email.toLowerCase().includes(userSearchTerm.toLowerCase()))
                    .map(user => (
                    <UserItem 
                        key={user.id}
                        onClick={() => setSelectedUser(user)}
                        $selected={selectedUser?.id === user.id}
                    >
                        <UserEmail>{user.email}</UserEmail>
                        <UserInfo>
                        <div>Access: {user.allowedLists?.length || 0} lists</div>
                        </UserInfo>
                    </UserItem>
                ))}
            </UserList>
          </Section>

          {/* List Search Section */}
          <Section>
            <SectionTitle>Search Lists by Code</SectionTitle>
            <SearchInput
              placeholder="Type to search lists..."
              value={listSearchTerm}
              onChange={(e) => setListSearchTerm(e.target.value)}
            />
            <ListGrid show={listSearchTerm.length > 0}>
                {lists
                    .filter(list => list.id.toLowerCase().includes(listSearchTerm.toLowerCase()))
                    .map(list => (
                    <ListCode 
                        key={list.id}
                        onClick={() => setSelectedList(list)}
                        $selected={selectedList?.id === list.id}
                    >
                        {list.id}
                    </ListCode>
                ))}
            </ListGrid>
          </Section>

          {/* Selected Items Display */}
          <SelectionSummary>
            <SelectedItem>
              <Label>Selected User:</Label>
              <Value>{selectedUser?.email || "None"}</Value>
            </SelectedItem>
            <SelectedItem>
              <Label>Selected List:</Label>
              <Value>{selectedList?.id || "None"}</Value>
            </SelectedItem>
          </SelectionSummary>

          {/* Action Section */}
          <ActionSection>
            {error && <ErrorText>{error}</ErrorText>}
            <ConfirmButton 
              onClick={handleAddPermission}
              disabled={!selectedUser || !selectedList}
            >
              Confirm Permission
            </ConfirmButton>
          </ActionSection>
        </ContentContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};
export default AdminPermissionManagerModal;

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
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  color: var(--highlight1);
  font-family: var(--text-font);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--light-grey);
  font-family: var(--title-font);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 0.5rem;
  color: var(--highlight3);

  &:hover {
    color: var(--highlight2);
  }
`;

const ContentContainer = styled.div`
  padding: 1.5rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 1rem;
  font-family: var(--title-font);
`;

const SearchInput = styled.input`
  padding: 5px;
    font-family: var(--title-font);
    font-size: 1.25rem;
    border: 1px solid var(--primary);
    width: 250px;
    margin-bottom: 1rem;
`;

const UserList = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  max-height: 300px;
  overflow-y: auto;
`;

const UserItem = styled.div`
  padding: 1rem;
  border: 1px solid ${props => props.$selected ? "var(--highlight1)" : "var(--light-grey)"};
  margin-bottom: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.$selected ? "var(--highlighted-box)" : "var(--white)"};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$selected ? "var(--highlighted-box)" : "var(--secondary)"};
  }
`;

const UserEmail = styled.span`
  font-family: var(--text-font);
  color: var(--highlight2);
`;

const UserInfo = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--highlight3);
`;

const ListGrid = styled.div`
  display: ${({ show }) => (show ? "grid" : "none")};
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  max-height: 300px;
  overflow-y: auto;
`;

const ListCode = styled.div`
  padding: 1rem;
  border: 1px solid ${props => props.$selected ? "var(--highlight1)" : "var(--light-grey)"};
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.$selected ? "var(--highlighted-box)" : "var(--white)"};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$selected ? "var(--highlighted-box)" : "var(--secondary)"};
  }
`;

const SelectionSummary = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SelectedItem = styled.div`
  padding: 1rem;
  background: var(--secondary);
  border-radius: 4px;
`;

const Label = styled.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--highlight2);
`;

const Value = styled.div`
  font-family: var(--text-font);
  font-size: 1.1rem;
`;

const ActionSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const ErrorText = styled.div`
  color: var(--dark-red);
  padding: 1rem;
  margin: 1rem 0;
  background-color: #f8d7da;
  border-radius: 4px;
  font-family: var(--text-font);
`;

const ConfirmButton = styled.button`
  padding: 5px 10px;
  font-family: var(--text-font);
  font-size: 1.2rem;
  background-color: ${props => props.disabled ? "var(--light-grey)" : "var(--highlight1)"};
  color: var(--white);
  border: none;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? "var(--light-grey)" : "var(--highlight2)"};
  }
`;
