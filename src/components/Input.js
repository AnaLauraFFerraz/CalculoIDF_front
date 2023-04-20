import React, { useState } from 'react';
import styled from 'styled-components';

export default function Input({ onUpload }) {
  const [csvFile, setCsvFile] = useState(null);

  function handleFileUpload(e) {
    const file = e.target.files[0];
    setCsvFile(file);
  }

  return (
    <Container>
      <h1>Upload de arquivo CSV</h1>
      <FileInput type="file" accept=".csv" onChange={handleFileUpload} />
      <UploadButton onClick={() => onUpload && onUpload(csvFile)}>Upload</UploadButton>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FileInput = styled.input`
  margin: 20px 0;
`;

const UploadButton = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #0056b3;
  }
`;