import React from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";

const Login = () => {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <SignInButton onClick={handleLogin}>
      <i className="fab fa-google icon" style={{ fontSize: "1.5rem" }}></i>
      Sign in with Google
    </SignInButton>
  );
};

export default Login;

// Styled Button (similar to ClearButton example)
const SignInButton = styled.button`
  width: 100vw;
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

  .icon {
    margin-right: 10px;
  }
`;

// Google Icon (using a simple font awesome icon)
const GoogleIcon = styled.i`
  font-size: 1.4rem;
  color: white;
`;
