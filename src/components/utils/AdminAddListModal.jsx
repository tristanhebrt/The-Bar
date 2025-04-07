import React, { useState } from "react";
import styled from "styled-components";
import { firestore, saveListFromImportedData, auth  } from "../../firebase"; // Assuming you're using Firebase Firestore
import { setDoc, doc } from "firebase/firestore";

const AdminAddListModal = ({ onClose }) => {
    const [file, setFile] = useState(null);
    const [parsedData, setParsedData] = useState([]);
    const [error, setError] = useState(null);
  
    // Move parseJavaScript to the top
    const parseJavaScript = (content) => {
      const regex = /export\s+const\s+(\w+)\s*=\s*({[\s\S]*?});/g;
      let match;
      const parsedData = [];
    
      while ((match = regex.exec(content)) !== null) {
        const [fullMatch, constName, constValue] = match;
        try {
          const parsedValue = new Function('return ' + constValue)();
          parsedData.push({
            name: constName,
            value: parsedValue,
          });
        } catch (err) {
          console.error(`Failed to parse ${constName}:`, err);
        }
      }
      return parsedData;
    };
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const fileExtension = selectedFile.name.split('.').pop();
        const fileMimeType = selectedFile.type;
  
        if (fileExtension === "js" || fileMimeType === "application/javascript") {
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
              const contents = e.target.result;
              const parsed = parseJavaScript(contents);
              setParsedData(parsed);
              setFile(selectedFile);
              setError(null);
            } catch (err) {
              setError("Error parsing file contents");
              console.error("File parsing error:", err);
            }
          };
          reader.readAsText(selectedFile);
        } else {
          setError("Please select a valid JavaScript file (.js).");
          setFile(null);
        }
      }
    };
  
    const handleAddList = async () => {
      try {
        if (!parsedData || parsedData.length === 0) {
          throw new Error("No lists found in uploaded file");
        }
  
        for (const listExport of parsedData) {
          // Access the data correctly from the parsed structure
          const listData = listExport.value;
          
          if (!listData?.listCode || !listData?.listType) {
            console.error('Invalid list structure:', listData);
            continue;
          }
  
          await saveListFromImportedData(listData);
        }
        
        console.log('All lists saved successfully!');
        onClose(); // Close modal after successful save
      } catch (error) {
        console.error('Error saving lists:', error);
        setError(error.message);
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
