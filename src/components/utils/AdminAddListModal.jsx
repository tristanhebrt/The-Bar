import React, { useState } from "react";
import styled from "styled-components";
import { firestore, saveListFromImportedData, auth  } from "../../firebase"; // Assuming you're using Firebase Firestore
import { setDoc, doc } from "firebase/firestore";

const AdminAddListModal = ({ onClose }) => {
  const [file, setFile] = useState(null); // To store the uploaded file
  const [error, setError] = useState(null);

  // Handle file change (i.e. file selection)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split('.').pop();
      const fileMimeType = selectedFile.type;

      // Check if the file extension is '.js' and if the MIME type is correct
      if (fileExtension === "js" || fileMimeType === "application/javascript") {
        setFile(selectedFile);
        setError(null); // Clear error if valid file is selected
      } else {
        setError("Please select a valid JavaScript file (.js).");
        setFile(null); // Clear file if invalid
      }
    }
  };

  // Function to parse the JS content and extract all export const statements
  const parseJavaScript = (content) => {
    // This regex captures export const CONSTANT_NAME = { ... };
    const regex = /export\s+const\s+(\w+)\s*=\s*({[\s\S]*?});/g;
    let match;
    const parsedData = [];
  
    while ((match = regex.exec(content)) !== null) {
      const [fullMatch, constName, constValue] = match;
      let parsedValue = null;
      try {
        // Use a function constructor to evaluate the object literal.
        parsedValue = new Function('return ' + constValue)();
      } catch (err) {
        console.warn(`Parsing failed for ${constName} using eval:`, err);
        parsedValue = null;
      }
      parsedData.push({
        name: constName,
        value: parsedValue,
      });
    }
    console.log("parseJavaScript result:", parsedData);
    return parsedData;
  };
  

  // Handle list creation when the file is uploaded
  const handleAddList = async () => {
    console.log("handleAddList triggered");
    if (!file) {
      setError("Please upload a JavaScript file.");
      return;
    }
  
    try {
      const reader = new FileReader();
  
      reader.onload = async () => {
        const fileContents = reader.result;
        console.log("File Contents loaded:", fileContents);
      
        // Parse the JS content to extract export const values
        const parsedData = parseJavaScript(fileContents);
        console.log("Parsed Data:", parsedData);
      
        // Loop over each parsed constant and check for required fields
        for (const constant of parsedData) {
          const data = constant.value;
          if (
            data &&
            data.listName &&
            data.listType &&
            data.listCode &&
            data.items
          ) {
            console.log("Saving constant:", constant.name, data);
            await saveListFromImportedData(auth.currentUser, data);
          } else {
            console.warn(`Constant ${constant.name} is missing required fields.`);
          }
        }
      
        alert("Lists added successfully!");
        onClose();
      };
  
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        setError("Error reading file: " + error.message);
      };
  
      reader.readAsText(file);
    } catch (err) {
      console.error("Error in handleAddList:", err);
      setError("Error adding list: " + err.message);
    }
  };
  
  

  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Add a New List</h2>
        {error && <ErrorText>{error}</ErrorText>}

        <InputContainer>
          <FileInput
            type="file"
            accept=".js"
            onChange={handleFileChange}
          />
        </InputContainer>

        <ButtonContainer>
          <Button onClick={handleAddList}>Add List</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AdminAddListModal;

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

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const FileInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
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

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;
