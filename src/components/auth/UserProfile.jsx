import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import styled from "styled-components";
import ProfileDropdown from "./ProfileDropdown"; // Import the ProfileDropdown

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
    if (!fullName) return "User";
    const nameParts = fullName.split(" ");
    return nameParts[0]; // Return only the first part of the name (first name)
  };

  return user ? (
    <ProfileCard>
      <ProfileDropdown userData={userData} />
      <UserName>Logged-in as {getFirstName(userData?.name)}</UserName>
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

const UserName = styled.h2`
  font-size: 1.25rem;
  color: var(--black);
`;
