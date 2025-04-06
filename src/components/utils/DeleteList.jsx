import React from 'react';
import styled from 'styled-components';

const DeleteList = ({ onDelete }) => {
  return (
    <DeleteButtonWrapper>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </DeleteButtonWrapper>
  );
};

const DeleteButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const DeleteButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  
  &:hover {
    background: darkred;
  }
`;

export default DeleteList;
