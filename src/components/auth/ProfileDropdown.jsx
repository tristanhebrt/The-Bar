import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import ImportListModal from "./ImportListModal.jsx"; // We'll create this component next

const ProfileDropdown = ({ userData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track image loading

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
        {isLoading && <Spinner />} {/* Show loading animation */}
        <ProfileImage
          src={userData?.profilePic || "/images/default-profile.png"}
          alt="User Profile"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          $isLoading={isLoading} // Use $ prefix
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
  position: absolute;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #ccc;
  display: ${(props) => (props.$isLoading ? "none" : "block")}; // Use transient prop ($)
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
