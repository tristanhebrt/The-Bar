// ImportListModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { saveCocktailList } from "../../firebase";

const ImportListModal = ({ onClose, onImportSuccess }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImport = () => {
    if (!file) {
      alert("Please select a file to import.");
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = function (e) {
      try {
        const fileContent = e.target.result;
        const modifiedContent = fileContent.replace(
          /^\s*export\s+const\s+(\w+)\s*=\s*/m,
          "const __importedList__ = "
        ).trim();
  
        const wrappedCode = `(function() { ${modifiedContent}\n return __importedList__; })()`;
        const importedObject = new Function("return " + wrappedCode)();

        // Validate and save the full object
        if (
          importedObject &&
          importedObject.listType === "cocktails" &&
          importedObject.listName &&
          Array.isArray(importedObject.items)
        ) {
          saveCocktailList(importedObject); // Save full object
          if (typeof onImportSuccess === "function") {
            onImportSuccess(); // Trigger refresh
          }
          alert("List imported successfully!");
          onClose();
        } else {
          alert("Invalid list format. Please ensure the file contains a valid cocktail list.");
        }
      } catch (error) {
        console.error("Import error:", error);
        alert("Error importing list. Please ensure the file is valid.");
      }
    };
  
    reader.onerror = function () {
      alert("File read error");
    };
  
    reader.readAsText(file);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Import Cocktail List</h2>
        <FileInput type="file" onChange={handleFileChange} accept=".js" />
        <ButtonsContainer>
          <Button onClick={handleImport}>Import</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ButtonsContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ImportListModal;

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

const FileInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;

const ButtonsContainer = styled.div`
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
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }

  &:nth-child(2) {
    background-color: #ccc;

    &:hover {
      background-color: #888;
    }
  }
`;
