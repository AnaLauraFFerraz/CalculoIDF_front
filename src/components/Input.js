import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


export default function Input() {
  const [csvFile, setCsvFile] = useState(null);

  function handleFileUpload(e) {
    const file = e.target.files[0];
    setCsvFile(file);
  }

  async function uploadCSV() {
    if (!csvFile) {
      alert('Por favor, selecione um arquivo CSV');
      return;
    }

    const formData = new FormData();
    formData.append('file', csvFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        const jsonResponse = response.data;
        // Faça algo com a resposta JSON
      }
    } catch (error) {
      console.error('Erro ao fazer upload do arquivo CSV:', error);
    }
  }

  return (
    <Container>
      <h1>Upload de arquivo CSV</h1>
      <FileInput type="file" accept=".csv" onChange={handleFileUpload} />
      <UploadButton onClick={uploadCSV}>Upload</UploadButton>
    </Container>
  );
}
  

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const FileInput = styled.input`
  margin: 10px;
`;

const UploadButton = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

