// ProfileDropdown.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import ImportListModal from "./ImportListModal.jsx"; // We'll create this component next

const ProfileDropdown = ({ userData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    signOut(auth);
    setIsDropdownOpen(false);
  };

  const handleImportClick = () => {
    setIsImportModalOpen(true);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <ProfileContainer onClick={toggleDropdown}>
        <ProfileImage
          src={userData?.profilePic || "https://via.placeholder.com/80"}
          alt="User Profile"
        />
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem onClick={handleImportClick}>Import List</DropdownItem>
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
          </DropdownMenu>
        )}
      </ProfileContainer>

      {isImportModalOpen && (
        <ImportListModal onClose={() => setIsImportModalOpen(false)} />
      )}
    </>
  );
};

export default ProfileDropdown;

// Styled Components
const ProfileContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #ccc;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);
  padding: 0.25rem;
  width: 110px;
  z-index: 100;
  font-family: var(--text-font);
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;
