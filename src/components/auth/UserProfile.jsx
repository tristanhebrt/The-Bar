import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import styled from "styled-components";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const getFirstName = (fullName) => {
    if (!fullName) return "User Name";
    const nameParts = fullName.split(" ");
    return nameParts[0]; // Return only the first part of the name (first name)
  };

  return user ? (
    <ProfileCard>
      <ProfileImage
        src={userData?.profilePic || "https://placekitten.com/80/80"}
        alt="User"
      />
      <UserName>Logged-in as {getFirstName(userData?.name)}</UserName>
      <LogoutButton onClick={() => signOut(auth)}>Logout</LogoutButton>
    </ProfileCard>
  ) : (
    <p style={{ textAlign: "center", marginTop: "20px", color: "gray" }}>
      Please login
    </p>
  );
};

export default UserProfile;

// Styled Components
const ProfileCard = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1rem 1rem 0 1rem;
  width: 100vw;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #ccc;
`;

const UserName = styled.h2`
  font-size: 1.25rem;
  color: var(--black);
`;

const LogoutButton = styled.button`
  width: auto;
  position: absolute;
  right: 1rem;
  padding: 10px 20px;
  font-family: var(--text-font);
  font-size: 1.2rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: var(--white);
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.1s ease, box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--highlight3);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;
